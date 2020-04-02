var http = require('http');
//loads http module
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //sets the right header and status code
  res.end('<html><header><title>This is title</Welcome to Vignesh NodeJS Application></header><body>Cheers!!! Node.js Deployed on Local Server</body></html>');
  //outputs string with line end symbol
}).listen(8081);
//sets port and IP address of the server
console.log('Server running at http://127.0.0.1:8081/');
