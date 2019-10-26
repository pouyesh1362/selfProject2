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

app.get('/landing' ,(req,res)=>{
res.sendFile('view/landing.html' , {root:__dirname});

});
app.get('/signin',(req, res)=>{
res.sendFile('/view/signin.html' , {root: __dirname});
})
app.get('/signup' ,(req , res)=>{
res.sendFile('/view/signup.html', {root: __dirname});
})














//<------------------------listener------------>
app.listen(PORT,()=> console.log(`server started ON http://localhost:${PORT}/`));