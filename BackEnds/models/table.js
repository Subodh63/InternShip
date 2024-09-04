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
        }

})

const table = mongoose.model("Subodhtable",connectSchema);
module.exports = table;