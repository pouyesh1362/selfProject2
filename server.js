const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// // --------------------data Base-----------
const db = require('./models');
const routes = require('./routes');

const session = require('express-session');
// <----------------MiddleWare------------------>

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// <-----------------------Port--------------------->

const PORT = process.env.PORT || 3500;



app.use (session({
    secret:'work hard',
    resave :true ,
    saveUninitialized: false,
}));





// <-----------------------Routes---------------------->
app.use('/api/v1' , routes.api);
app.use('/' , routes.views);















//<------------------------listener------------>
app.listen(PORT,()=> console.log(`server started ON http://localhost:${PORT}/`));