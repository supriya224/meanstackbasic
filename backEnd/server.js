
const express = require("express");
// create a object of express for  convient
const app =  express();
const api =  require('./routes/api');
const dbconn = require('./monogdbConn/mongoDbcon');
const port =process.env.PORT ||3030;
const bodyParser = require('body-parser');
// handle middleware 
    app.use(bodyParser.json());
// create some routes
app.use('/api',api);
app.get('/',(req,res)=>{
    res.send("hello puja");
})
app.listen(port,()=>{
    console.log("server is running on:",port);
})

