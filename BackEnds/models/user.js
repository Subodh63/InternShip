const mongoose = require('mongoose');


const connectSchema =new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        },
        mobile:{
            type:Number
        },
        password:{
            type:String

        }

})

const user = mongoose.model("Subodhuser",connectSchema);
module.exports = user;