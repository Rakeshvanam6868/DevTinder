const Authorization=(req,res,next)=>{
    const token="Rakesh";
    const isAuth=token === "Rakesh";
    if(!isAuth){
        res.status(401).send("Invalid credentials");
    }
    else{
        next();
    }
}

module.exports={Authorization};