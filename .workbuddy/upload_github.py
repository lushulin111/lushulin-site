"""
v2: 修复 Windows 下 git ls-files 对中文路径的八进制转义 + 断点续传。
"""
import urllib.request
import urllib.error
import json
import base64
import subprocess
import os
import time
from urllib.parse import quote

TOKEN = os.environ.get("GH_DEPLOY_TOKEN", "")
OWNER = "lushulin111"
REPO = "lushulin-site"
PROJECT_DIR = r"D:\workbuddy\个人网站"
CHECKPOINT = os.path.join(PROJECT_DIR, ".workbuddy", "upload_done.txt")

# 加载已完成列表
done = set()
if os.path.exists(CHECKPOINT):
    with open(CHECKPOINT, "r", encoding="utf-8") as f:
        done = set(line.strip() for line in f if line.strip())
print(f"已完成（断点）: {len(done)} 个")

# 取文件清单（关掉 quotePath 以正确输出中文路径）
result = subprocess.run(
    ["git", "-C", PROJECT_DIR, "-c", "core.quotePath=false", "ls-files"],
    capture_output=True, text=True
)
files = [f for f in result.stdout.strip().split("\n") if f]
print(f"总文件数: {len(files)}")

ok, fail = len(done), 0
to_upload = [f for f in files if f not in done]
print(f"待上传: {len(to_upload)} 个\n")

with open(CHECKPOINT, "a", encoding="utf-8") as ckpt:
    for i, path in enumerate(to_upload, 1):
        full = os.path.join(PROJECT_DIR, path.replace("/", os.sep))
        size = os.path.getsize(full)
        with open(full, "rb") as f:
            content = f.read()
        b64 = base64.b64encode(content).decode()
        body = json.dumps(
            {"message": f"upload {path}", "content": b64, "branch": "main"},
            ensure_ascii=False
        )
        url = (
            f"https://api.github.com/repos/{OWNER}/{REPO}/contents/"
            f"{quote(path, safe='/')}"
        )
        req = urllib.request.Request(
            url,
            data=body.encode("utf-8"),
            method="PUT",
            headers={
                "Authorization": f"token {TOKEN}",
                "Accept": "application/vnd.github+json",
                "Content-Type": "application/json",
                "X-GitHub-Api-Version": "2022-11-28",
                "User-Agent": "WorkBuddy-Deploy",
            },
        )
        try:
            resp = urllib.request.urlopen(req, timeout=300)
            code = resp.getcode()
            print(f"[{i}/{len(to_upload)}] OK {code}  {size/1024:7.1f}KB  {path}")
            ok += 1
            ckpt.write(path + "\n")
            ckpt.flush()
        except urllib.error.HTTPError as e:
            err_body = e.read().decode("utf-8", errors="replace")[:200]
            if e.code in (409, 422) and ("already" in err_body.lower() or "sha" in err_body.lower()):
                print(f"[{i}/{len(to_upload)}] SKIP(exists)  {path}")
                ckpt.write(path + "\n")
                ckpt.flush()
            else:
                print(f"[{i}/{len(to_upload)}] FAIL {e.code}  {path}: {err_body}")
                fail += 1
        except Exception as e:
            print(f"[{i}/{len(to_upload)}] FAIL  {path}: {e}")
            fail += 1
        time.sleep(0.05)

print(f"\n汇总: OK={ok}  FAIL={fail}")