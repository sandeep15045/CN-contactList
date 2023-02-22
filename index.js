const express= require('express');
const port=8000;
const path=require('path');
const app=express();
const db = require('./config/mongoose');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
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
app.get('/delete-contact/',function(req,res){
    let number= req.query.number
    let index = contactList.findIndex(contact=>contact.number==number);
    if(index!=-1)
    {
        contactList.splice(index,1)
    }return res.redirect('back')


})
app.listen(port,function(err){
    if(err)
    {
        console.log('error ',err)
    }
   
    console.log('server runnning on port: ',port)

});