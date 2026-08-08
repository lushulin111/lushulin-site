const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const PORT = 8099;
const MIME = {
  '.html':'text/html; charset=utf-8',
  '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8',
  '.webp':'image/webp',
  '.jpg':'image/jpeg',
  '.png':'image/png',
  '.mp4':'video/mp4',
  '.txt':'text/plain; charset=utf-8',
  '.pptx':'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.mermaid':'text/plain; charset=utf-8'
};
const server = http.createServer((req, res) => {
  const reqPath = decodeURIComponent(req.url.split('?')[0]);
  const p = path.join(ROOT, reqPath === '/' ? '/index.html' : reqPath);
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404); res.end('404 Not Found'); return; }
    const ext = path.extname(p).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    res.end(data);
  });
});
server.listen(PORT, () => console.log('preview on http://localhost:' + PORT));
