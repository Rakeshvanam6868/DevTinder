const express = require('express');
const app=express();
const {Authorization}=require("./middlewares/auth");

app.use("/user",Authorization,(req,res,next)=>{
    res.send("Welcome to the Dashboard!");
})

app.get("/user",(req,res)=>{
    res.send("user information");
})
app.get("/admin/getUserDetails",(req,res)=>{
    res.send("Welcome to the adminPage");
})

app.listen(3000,(req,res)=>{
    console.log("Listening on port is 3000");
})

