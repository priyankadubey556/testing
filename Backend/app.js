const express = require('express');
const route = require('./routes/route');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost:27017/register');
mongoose.connection.on('connected',()=>{
    console.log('database connected successfully')
}

)
const port = 3020;
app.use(cors());
app.set('port', port);
app.use(bodyparser.json());
app.use((req, res, next)=>{
    console.log('First Middleware');
    next();
});

app.use('/api', route)



module.exports = app;

