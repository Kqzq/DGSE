var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm gay");
  res.end();
}).listen(8080);
