const express = require('express');
const router=express.Router();

/* Get movies page */

router.get('/', (req,res,next)=>{
    res.render('movies',{title: 'Movies'});
    // res.send('Movies')
})

module.exports=router;