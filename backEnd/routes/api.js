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

});
module.exports = router;