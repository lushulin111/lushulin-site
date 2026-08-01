import os, glob, io

ROOT = r"D:\workbuddy\个人网站"
# 部署版引用的图片（排除 preview_demo）
IMG_RELS = [
    "assets/photos/avatar.jpg",
    "assets/photos/life1.jpg",
    "assets/photos/life2.jpg",
    "个人照片/生活照1.jpg",
    "抖音视频数据/抖音视频数据对比.png",
    "抖音视频数据/美资视频截图.png",
    "TK公开课视频/视频封面.png",
    "摄影公开课课程设计/1.png",
    "摄影公开课课程设计/2.png",
    "摄影公开课课程设计/3.png",
    "摄影公开课课程设计/4.png",
    "摄影公开课课程设计/5.png",
    "摄影公开课课程设计/6.png",
    "摄影公开课课程设计/7.png",
    "摄影公开课课程设计/8.png",
    "摄影公开课课程设计/9.png",
    "摄影公开课课程设计/VIP小课研发.jpg",
    "摄影公开课课程设计/口播视频录制.png",
    "assets/images/course-logic-jingzhun.png",
    "assets/images/douyin-data.png",
]

from PIL import Image

total_before = 0
total_after = 0
report = []

for rel in IMG_RELS:
    p = os.path.join(ROOT, rel)
    if not os.path.exists(p):
        print(f"SKIP (不存在): {rel}")
        continue
    before = os.path.getsize(p)
    total_before += before
    # 转 WebP（同名 .webp，删原文件）
    img = Image.open(p)
    # 保证 RGB（避免 RGBA 透明通道问题）
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    webp_path = os.path.splitext(p)[0] + ".webp"
    img.save(webp_path, "WEBP", quality=82)
    after = os.path.getsize(webp_path)
    total_after += after
    report.append((rel, before, after))

print("=== 转换完成 ===")
for rel, b, a in report:
    print(f"  {rel}: {b/1024:.0f}KB -> {a/1024:.0f}KB")
print(f"总体积: {total_before/1024/1024:.1f}MB -> {total_after/1024/1024:.1f}MB")
