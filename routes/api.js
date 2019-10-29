const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// <------------------------------showall api user -------->
router.get('/users' , ctrl.User.index);

router.post('/users' , ctrl.User.create );

router.put('/users/update/:userId',ctrl.User.update );

router.delete('/users/delet/:userId',ctrl.User.destroy);

router.get('/users/:userId', ctrl.User.show);


// <------------------------------showall api books -------->

router.get('/books' ,ctrl.Book.index ); 

router.post('/books', ctrl.Book.create);

router.put('/books/update/:bookId',ctrl.Book.update );

router.delete('/books/delete/:bookId' ,ctrl.Book.destroy );

router.get('/books/:bookId', ctrl.Book.show);

module.exports = router;