'use strict';
const http = require('http');
const redirectUrl = 'https://www.nicovideo.jp/';
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    Location: redirectUrl
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

