const mongoose = require('mongoose');

let schema = mongoose.Schema;


let personSchema = new schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

    age:{
        type:Number,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    address:{
        type:String,
        required:true
    }
})

const personModel = mongoose.model('persondata',personSchema);

module.exports=personModel;