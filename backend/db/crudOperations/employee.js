const Emp=require("../schemas/empSchema");
const Uid=require("uuid/v1");
const fs=require("fs");
const path=require("path");


// console.log(path.join(__dirname,'../../docUploads/policeVerification'));
// console.log(__dirname);

const empCrud={

    doLogin(req,res,object){
        
        console.log('came here later');
        Emp.findOne(object,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    },

    doRegister(req,res,object){

       console.log(object.id);
        //method to create objeccts in db
        Emp.findOne({email:object.email,mobile_no:object.mobile_no},function(error,result){   //checking if record already exists
            if(error){
                console.log("some error occured during querying");
            }
            else if(result==null){
                Emp.create(object,(err)=>{
                    /*if(error!=null){   //file exist validation
                        res.json(error);
                    }*/
                    if(err){
                        res.json(err);            }   //error while uploading data to db
                    else{
                        console.log("record created");
                        res.json('true');
                    }    
                    
                    });
            }
            else{
                res.json("record already exists");
            }     
        })
        
    },


 

}




module.exports=empCrud;