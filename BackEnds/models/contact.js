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
        desc:{
            type:String

        }

})

const contact = mongoose.model("SubodhContact",connectSchema);
module.exports = contact;