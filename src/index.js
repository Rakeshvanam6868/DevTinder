const express = require('express');
const app=express();


app.use("/",(req,res,next)=>{
    
    console.log("Print response 1");
    next();
    //res.send("response 1");
},
(req,res,next)=>{
   // res.send("response 2");
    console.log("print response 2");
    next();
}
,
[(req,res,next)=>{
    //res.send("response 3");
    console.log("print response 3");
    next();
}
,
(req,res,next)=>{
   // res.send("response 4");
    console.log("print response 4");
    next();
}
,
(req,res,next)=>{
    res.send("response 5");
    console.log("print response 5");
}]
)
app.listen(3000,(req,res)=>{
    console.log("Listening on port is 3000");
})

