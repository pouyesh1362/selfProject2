const express = require('express');
const router = express.Router();



router.get('/landing' ,(req,res)=>{
    res.sendFile('view/landing.html' , {root:`${__dirname}/../`,
    });
})

    router.get('/signin',(req, res)=>{
    res.sendFile('/view/signin.html' , {root:`${__dirname}/../`,
});
})

    router.get('/signup' ,(req , res)=>{
    res.sendFile('/view/signup.html', {root:`${__dirname}/../`,
});
});

router.get('/browse', (req,res) =>{
    res.sendFile('/view/browse.html',{root:`${__dirname}/../`,
});
});

    module.exports = router;