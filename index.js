const http= require('http')
const port=8000;

function requestHandler(req,res){
    console.log(req.url)
    res.end('gotcha')
}
const server=http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    //importtant-> differnet way of writing port:
    console.log("server running ${{port}} on port : ",`port is ${port} `,port);
});