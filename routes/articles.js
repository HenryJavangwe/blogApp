const express = require('express');
const router = express.Router(); //this will give us a router that'll use to create views.


router.get('/newArticle', (req, res)=>{
    res.render('articles/newArticle')//here we render a page that we'll place inside articles and we're going to call it newArticle.
});

module.exports = router;