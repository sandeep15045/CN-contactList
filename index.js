const express= require('express');
const port=8000;
const path=require('path');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',function(req,res){
    console.log(__dirname);
    return res.render('home',{'title':"My contacts list"});
    
})

app.listen(port,function(err){
    if(err)
    {
        console.log('error ',err)
    }
   
    console.log('server runnning on port: ',port)

});