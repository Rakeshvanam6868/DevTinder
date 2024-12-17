const express = require('express');
const app=express();
const {Authorization}=require("./middlewares/auth");
const {connectDB} = require('./config/database');

connectDB()
   .then(()=>{
    console.log("Database is connected");
    app.listen(3000,(req,res)=>{
        console.log("Listening on port is 3000");
    })
})
  .catch(err=>{
    console.error(err);
  })




