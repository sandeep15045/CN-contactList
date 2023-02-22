const express= require('express');
const port=8000;
const path=require('path');
const app=express();
const db = require('./config/mongoose');
const Contact = require('./models/user');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){

    Contact.find({},function(err,contactList){
        if(err){
            console.log('error in fetchin db', err);
            return;
        }
        return res.render('home',{
            'title':"My contacts list", 
            contact_list:contactList
            });
    });

    
})
app.post('/create',function(req,res){
   
    Contact.create(req.body,function(err,newContact){
        if(err){
            console.log('error in creating db', err);
            return;
        }
        console.log('db created',newContact)
        return res.redirect('back')
    })

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