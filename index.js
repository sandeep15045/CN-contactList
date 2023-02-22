const express= require('express');
const port=8000;

const app=express();

app.get('/',function(req,res){
    res.send('cool it is running');
})

app.listen(port,function(err){
    if(err)
    {
        console.log('error ',err)
    }
   
    console.log('server runnning on port: ',port)

});