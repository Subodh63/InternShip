const mongoose = require('mongoose');


const connectSchema =new mongoose.Schema({
    name: {
        type: String,
    },
    Address: {
        type: String,
        },
        Country:{
            type:String
        },
        State:{
            type:String
        },
        Qualification:{
            type:String
        },
        Religion:{
            type:String
        },
        Action:{
            type:String
        }

})

const employee = mongoose.model("Subodhemployee",connectSchema);
module.exports = employee;