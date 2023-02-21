var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8000);

var server = http.createServer(function (req, res) {   // 2 - creating server
    //handle incomming requests here..
});
server.listen(8000); //3 - listen for any incoming requests
console.log('Node.js web server at port 5000 is running..')