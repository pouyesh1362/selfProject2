const db = require('../models');

const show = (req ,res)=>{
    db.Book.find({} , (error , allBooks)=>{
      if(error) return console.log(error);
      res.json({
        status: 200,
        count: allBooks.length,
        data: allBooks,
        requestAt: new Date().toLocaleString(),
      }); 
    });
  }

  const create = (req, res)=>{
    db.Book.create(req.body, (error, createdBook)=>{
      if(error) return consle.log(error);
      res.json({
        status: 200,
        count: createdBook.length,
        data:createdBook,
        requestAt: new Date().toLocaleString(),
      });
    });
  }

  const destroy = (req,res)=>{
    db.Book.findByIdAndDelete(req.params.bookId, (error,deletedBook)=>{
      if(error) consle.log(error);
      res.json({
        status: 200,
        count: 1,
        data:deletedBook,
        requestAt: new Date().toLocaleDateString(),
      });
    });
  }
  
  const update = (req,res)=>{
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
  }

  module.exports = {
      show,
      destroy,
      update,
      create
  }