const mongoose =require('mongoose');

const user=new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type : String,
    },
    email: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    password: {
        type: String,
    }
})

module.exports = mongoose.model('User', user);