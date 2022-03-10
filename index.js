'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  // https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
  // リダイレクトの実装
  res.writeHead(302, {
    Location: 'https://www.nicovideo.jp/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

