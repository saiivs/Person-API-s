let Person = require('./schema');

module.exports={

    PersonData:(data)=>{
        return new Promise(async(res,rej)=>{
            if(data){
                let person = new Person(data);
                let response = await person.save()
                console.log(response);
                res({status:false})   
            }
            else{
                rej()
            }
            
        })
    },

    getPersonData:()=>{
        return new Promise(async(res,rej)=>{
            let data = await Person.find()
            if(data){
                res(data)
            }
            else{
                rej()
            }
        })
    }
}