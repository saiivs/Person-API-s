const db = require('../model/database');
const asyncHandler = require('express-async-handler')



module.exports={

    addData:asyncHandler(async(req,res)=>{
        let response=await db.PersonData(req.body)
        if(response.status){
            res.status(200).json({status:"Added Successfully"})
        }
        else{
            res.status(404);
            throw new Error('Something went wrong!!')
        }
    }),

    getData:asyncHandler(async(req,res)=>{
        let data = await db.getPersonData()
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404);
            throw new Error('Something went wrong!!')
        }
    })
}