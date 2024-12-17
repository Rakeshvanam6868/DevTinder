const db =require("mongoose");

const connectDB=async()=>{
    await db.connect("mongodb+srv://rakeshvanam2002:Ra_6868_ki@devtinder.xpr3u.mongodb.net/devtinder")
};

module.exports={connectDB};