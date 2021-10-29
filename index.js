'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
const redirect_URL = 'https://www.nicovideo.jp/'
  res.writeHead(302, {
    Location: redirect_URL
  })
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

