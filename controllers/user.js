const db = require('../models');

const show = (req,res)=>{
    db.User.find({} , (error , allusers)=>{
        if(error) return console.log('error');
        res.json({
        static : 200,
        count: allusers.length,
        data:allusers,
        requestAt: new Date().toLocaleDateString,
        });
       });
    }

const destroy = (req , res)=>{
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
  }

const update = (req, res)=>{
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
  }

  const create = (req,res)=>{
    db.User.create(req.body,(error , createdUser)=>{
        if(error) return console.log(error);
        res.json({
            status:201,
            data:createdUser,
            requestAt: new Date().toLocaleDateString(),
        });
      });
    }

module.exports = {
    show,
    destroy,
    update,
    create
}