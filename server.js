var http = require('http');
//loads http module
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/html'});
  //sets the right header and status code
  res.end('<h2>Welcome to Vignesh NodeJS Application</h2><h3>Cheers!!! Node.js Deployed on Local Server</h3>');
  //outputs string with line end symbol
}).listen(8081);
//sets port and IP address of the server
console.log('Server running at http://127.0.0.1:8081/');
