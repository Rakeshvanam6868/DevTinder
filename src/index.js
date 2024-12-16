const express = require('express');
const app=express();

app.listen(3000,(req,res)=>{
    console.log("Listening on port is 3000");
})

app.use("/hello",(req,res)=>{
    res.send("Hello world");
})

app.use("/test",(req,res)=>{
    res.send("This is a test");
})

app.use("/",(req,res)=>{
    res.send("Normal Page");
})