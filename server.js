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


// <------------------------------showall api-------->
app.get('/api/v1/users' , (req,res)=>{
db.User.find({} , (error , allusers)=>{
    if(error) return console.log('error');
    res.json({
    static : 200,
    count: allusers.length,
    data:allusers,
    requestAt: new Date().toLocaleDateString,
    });
   });
});

app.post('/api/v1/users' , (req,res)=>{
db.User.create(req.body,(error , createdUser)=>{
    if(error) return console.log(error);
    res.json({
        status:201,
        data:createdUser,
        requestAt: new Date().toLocaleDateString(),
    });
  });
});














//<------------------------listener------------>
app.listen(PORT,()=> console.log(`server started ON http://localhost:${PORT}/`));