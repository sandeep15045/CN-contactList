const http= require('http')
const port=8000;
const fs=require('fs');

function requestHandler(req,res){
    console.log(req.url);
    fs.readFile('./index.html',function(err,data){
        if(err)
        {
            console.log('error',err);
            return res.end('<h1>erro</h1>');
        }
        return res.end(data);
    })

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