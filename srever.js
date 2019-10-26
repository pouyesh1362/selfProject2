const express = requie('express');
const mongoose = require('mongoose');
const app = express();

// --------------------data Base-----------
const db = require('./models');


// <----------------MiddleWare------------------>

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// <-----------------------Port--------------------->

const PORT = process.env.PORT || 3500;

















//<------------------------listener------------>
app.listen(PORT,()=> console.log(`server started ON http://localhost:${PORT}`));