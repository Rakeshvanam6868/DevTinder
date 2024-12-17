const express = require('express');
const app=express();
const {Authorization}=require("./middlewares/auth");
const {connectDB} = require('./config/database');
const User = require('./models/user')

app.use(express.json());

app.get("/feed",async (req,res)=>{
    const users=await User.find({});
    res.send(users);
})

app.get("/user", async(req,res)=>{
  const emailUser=req.body.email;
  const user=await User.find({email:emailUser})
  try{
    if(!user){
      res.status(404).send("User not found");
    }
    else{
      res.send(user);
    }
  }catch(e){
    res.status(404).send("something went wrong");
  }
})
app.post('/signup',async (req,res)=>{
  const user=new User(req.body);
  try{
    await user.save();
    res.send("user data saved successfully");
  }catch(e){
    res.status(400).send("some error is "+ e.message);
  }
  

})

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




