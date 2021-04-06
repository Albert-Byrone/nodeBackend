//database configurations
//mongodb+srv://albertbyrone:<password>@cluster0.obns7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')


const stuffRoutes = require('./routes/thing')
const userRouters = require('./routes/user')
const app = express();

mongoose.connect('mongodb+srv://albertbyrone:Albert254@cluster0.obns7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(()=>{
        console.log("Connected to the database");
    })
    .catch((error)=>{
        console.log(error);
    });

app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content,Accept,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT,PATCH,DELETE,OPTIONS');
    next();
});
app.use(bodyParser.json());
///set the routing
app.use('/api/stuff',stuffRoutes );
//handle images route
app.use('/images', express.static(path.join(__dirname, 'images')));
//user routing
app.use('/api/auth', userRouters);
module.exports = app;
