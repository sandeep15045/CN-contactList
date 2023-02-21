var http = require('http');

http.createServer(function (req) {
    if(req){
        console.log(req);
        return;
    }
    console.log("server running on port: ",port)    
}).listen(8000);
