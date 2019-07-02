const express = require("express");
const router =  express.Router();
const User  = require('../model/user');
router.get("/",(req,res)=>{
    res.send("this is from api routes");

})
router.post('/register',(req,res)=>{
        let data = req.body;
        let user  =  new User(data);
        // checking the email is registered or not 
        User.findOne({email:data.email},(err,existUser)=>{
                if (err) {
                    releaseEvents.send(" error",err);
                } else  if(existUser){
                    res.send("email is already exist");
                }else{
                    user.save((err,registerUser)=>{
                        if (err) {
                            res.send("data is not store ",err)
                        } else {
                            res.send(registerUser);
                        }
                    })
                }
                
        });

});


router.post('/login',(req,res)=>{
        let data= req.body;
        let user= new User(data);
         // log in page
         User.findOne({email:data.email},(err,existUser)=>{
              if (err){
                  res.send(err);
              }else if(existUser){
                    let password = data.password;
                        if(existUser.password == password){
                            res.status(200).send({user:existUser,
                            message:"login succesfull"});
                        }
                        else{
                            res.status(401).send("paasword is wrong");                        }
                }else{
                     res.status(400).send("email is invalid");  
                    }
                
         });
});


// events 

router.get('/event',(req,res) =>{
    let events = [
                {
                "id":"1",
                "name":"auto",
                "description":"loremerr",
                "date":"2012-04-23T18:25:34.332Z"
                },
                {
                    "id":"2",
                    "name":"autdfo",
                    "description":"loremefgfrr",
                    "date":"2012-04-23T18:25:34.332Z"
                },
                {
                    "id":"3",
                    "name":"ariedfsuto",
                    "description":"lovbremerr",
                    "date":"2012-04-23T18:25:34.332Z"
                },
                {
                    "id":"4",
                    "name":"merw",
                    "description":"loremerr",
                    "date":"2012-04-23T18:25:34.332Z"
                }
            ]
    res.json(events)
});


router.put('/:_id',(req,res)=>{

            User.findByIdAndUpdate(req.params._id,{name:req.body.name},{useFindAndModify:false},(err,doc)=>{
                    if (err) {
                        res.json({error:err})
                    } else {
                            res.status(200).send({
                                message:"succesfuly update ",
                                response:doc
                            })
                    }
            })

        });

router.delete('/:_id',(req,res)=>{
            User.findByIdAndRemove(req.params._id,{useFindAndModify:false},(err,result)=>{
                        if (err) {
                            res.send(err);
                        } 
                        else if(result){
                            res.status(200).json({message:"successful",
                            response:result
                            });       
                        }else {
                            res.status(401).send("invalid id "); 
                        }
            })   
})
module.exports = router;