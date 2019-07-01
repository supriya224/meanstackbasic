const mongoose = require('mongoose')

DBpath = 'mongodb://root:root224@ds345597.mlab.com:45597/pujatraining';
// create connection for mongodb

mongoose.connect(DBpath,{useNewUrlParser:true},(err)=>{
        if (err) {
                console.log("database is not connected successfull",err);
        }
        else{
            console.log("database is conneted successfully");
        }
})

module.exports  = mongoose;




