const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true // Enable credentials
}));

require('./db/db');
app.use(express.json());
app.use(require('./routes/route'));



app.listen(5000,() => {
    console.log("Server is running at port", 5000);
})