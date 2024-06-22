var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.end('Errore nella lettura del file');
    } else {
      res.end(data);
    }
  });
}).listen(8000);