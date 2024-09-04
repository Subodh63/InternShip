const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://mernstack:mern@mern.tzffmt0.mongodb.net/NewBatch?retryWrites=true&w=majority&appName=mern').then( () => {
    console.log('Connected to MongoDB');
}).catch((Error) =>{
    console.log(Error);   
})