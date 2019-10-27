const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// <------------------------------showall api user -------->
router.get('/users' , ctrl.User.show);

router.post('/users' , ctrl.User.create );

router.put('/users/update/:userId',ctrl.User.update );

router.delete('/users/delet/:userId',ctrl.User.destroy);


// <------------------------------showall api books -------->

router.get('/books' ,ctrl.Book.show ); 

router.post('/books', ctrl.Book.create);

router.put('/books/update/:bookId',ctrl.Book.update );

router.delete('/books/delete/:bookId' ,ctrl.Book.destroy );

module.exports = router;