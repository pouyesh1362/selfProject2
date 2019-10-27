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

app.put('/api/v1/users/update/:userId', (req, res)=>{
  db.User.findByIdAndUpdate(req.params.userId ,
     req.body ,
      {new:true},
      (error , updatedUser)=>{
        if(error) console.log(error);
        res.json({
          status: 200,
          count: 1,
          data: updatedUser,
          requestAt: new Date().toLocaleString(),
        });
      });
});

app.delete('/api/v1/users/delet/:userId',(req , res)=>{
  db.User.findByIdAndDelete(req.params.userId ,
    (error , deletedUser)=>{
      if(error) return console.log(error);
      res.json({
        status : 200,
        count: 1,
        date: deletedUser,
        requestAt: new Date().toLocaleString(),
      });
    });
});


app.get('/api/v1/books' , (req ,res)=>{
  db.Book.find({} , (error , allBooks)=>{
    if(error) return console.log(error);
    res.json({
      status: 200,
      count: allBooks.length,
      data: allBooks,
      requestAt: new Date().toLocaleString(),
    }); 
  });
}); 

app.post('/api/v1/books', (req, res)=>{
  db.Book.create(req.body, (error, createdBook)=>{
    if(error) return consle.log(error);
    res.json({
      status: 200,
      count: createdBook.length,
      data:createdBook,
      requestAt: new Date().toLocaleString(),
    });
  });
});

app.put('/api/v1/books/update/:bookId', (req,res)=>{
  db.Book.findByIdAndUpdate(req.params.bookId,
    req.body,
    {new:true},
    (error, updatedBook)=>{
      if(error) return console.log(error)
      res.json({
        status: 200,
        count:1, 
        date:updatedBook,
        requestAt: new Date().toLocaleString(),
      });
    });
});

app.delete('/api/v1/books/delete/:bookId' , (req,res)=>{
  db.Book.findByIdAndDelete(req.params.bookId, (error,deletedBook)=>{
    if(error) consle.log(error);
    res.json({
      status: 200,
      count: 1,
      data:deletedBook,
      requestAt: new Date().toLocaleDateString(),
    });
  });
});














//<------------------------listener------------>
app.listen(PORT,()=> console.log(`server started ON http://localhost:${PORT}/`));