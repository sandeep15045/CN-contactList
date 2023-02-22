const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Contact=mongoose.model('ContactList',userSchema);
module.exports=Contact;