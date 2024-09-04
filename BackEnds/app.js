const express = require('express');
const app = express();

require('./db/db');
app.use(express.json());
app.use(require('./routes/route'));



app.listen(5000,() => {
    console.log("Server is running at port", 5000);
})