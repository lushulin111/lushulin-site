#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
本地静态文件服务器，支持 HTTP/1.1 与 Range 请求，
确保浏览器可正常流式播放 .mp4 等视频文件。
用法: python serve.py [port]
"""
import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


class RangeHTTPRequestHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"  # 支持 keep-alive 与正文流式传输

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def do_GET(self):
        range_header = self.headers.get("Range")
        if range_header:
            m = re.match(r"bytes=(\d+)-(\d*)$", range_header.strip())
            if m:
                path = self.translate_path(self.path)
                if os.path.isfile(path):
                    fsize = os.path.getsize(path)
                    start = int(m.group(1))
                    end = fsize - 1
                    if m.group(2):
                        end = min(int(m.group(2)), fsize - 1)
                    if start <= end < fsize:
                        self.send_response(206)
                        self.send_header("Content-Type", self.guess_type(path))
                        self.send_header(
                            "Content-Range", f"bytes {start}-{end}/{fsize}"
                        )
                        length = end - start + 1
                        self.send_header("Content-Length", str(length))
                        self.end_headers()
                        with open(path, "rb") as f:
                            f.seek(start)
                            self._copy_exactly(f, self.wfile, length)
                        return
        # 无 Range 或解析失败，走默认处理
        return super().do_GET()

    @staticmethod
    def _copy_exactly(src, dst, count):
        remaining = count
        while remaining > 0:
            chunk = src.read(min(64 * 1024, remaining))
            if not chunk:
                break
            dst.write(chunk)
            remaining -= len(chunk)


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8099
    os.chdir(BASE_DIR)
    httpd = ThreadingHTTPServer(("0.0.0.0", port), RangeHTTPRequestHandler)
    print(f"Serving {BASE_DIR} on http://localhost:{port} (HTTP/1.1 + Range)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.shutdown()


if __name__ == "__main__":
    main()
