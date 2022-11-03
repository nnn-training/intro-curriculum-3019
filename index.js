'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const urls = ['https://www.nicovideo.jp/', 'https://www.nnn.ed.nico', 'https://www.nnn.ed.jp', 'https://google.com', 'https://www.youtube.com/', 'https://qiita.com/', 'https://github.com/'];
  const locationUrl = urls[(Math.floor(Math.random() * 10) * 4 + 3) % 7];
  res.writeHead(302, {
    Location: locationUrl
  })
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});

