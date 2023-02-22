const express= require('express');
const port=8000;
const path=require('path');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

var contactList=[
    {
        name:"sandeep",
        number:"11111"
    },
    {
        name:"Lucky",
        number:"22222"
    },
    {
        name:"Tarun",
        number:"33333"
    }
]
app.get('/',function(req,res){
    return res.render('home',{
    'title':"My contacts list", 
    contact_list:contactList
    });
    
})
app.post('/create',function(req,res){
    // contactList.push({
    //     name:req.body.first_name,
    //     number:req.body.number
    // })

    contactList.push(req.body);
    return res.redirect('/');


})
app.listen(port,function(err){
    if(err)
    {
        console.log('error ',err)
    }
   
    console.log('server runnning on port: ',port)

});