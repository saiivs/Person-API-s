const mongoose = require('mongoose');
require('dotenv').config()

const url=process.env.mongodbUrl
mongoose.connect(url).then(()=>{
    console.log("connection successfull..");
}).catch((error)=>{
    console.log("connection failed..");
})