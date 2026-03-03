'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  console.info('Redirected niconico');
  res.writeHead(302, {
    Location: 'https://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});
