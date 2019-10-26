const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// // --------------------data Base-----------
const db = require('./models');


// <----------------MiddleWare------------------>

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// <-----------------------Port--------------------->

const PORT = process.env.PORT || 3500;


// ---------------------------landingPage--------















//<------------------------listener------------>
app.listen(PORT,()=> console.log(`server started ON http://localhost:${PORT}/`));