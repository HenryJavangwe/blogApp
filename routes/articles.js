const express = require('express');
const Article = require('./../models/articles')
const router = express.Router(); //this will give us a router that'll use to create views.




router.get('/newArticle', (req, res)=>{
    res.render('articles/newArticle')//here we render a page that we'll place inside articles and we're going to call it newArticle.
});


router.get('/:id', (req, res)=>{
    //every time we pass in a router with  a /articles/something, if it's not new it'll go to this id param, essentially we're redirecting the user this router.

})
// we'll use async because it's an async function and we'll await when we save our article.
router.post('/', async (req, res)=> {
    const article = new Article({
        title   : req.body.title,
        author  : req.body.author,
        content : req.body.content,
        imageUrl1 : req.body.imageUrl1,
        imageUrl2 : req.body.imageUrl2,
        createdAt : req.body.createdAt,
    })
// Used the try-catch to catch and print out an error to the user if there's any and if not we'll redirect out user to a page that is at /articles/id and  
    try {
            article = await article.save();
            res.redirect(`/articles/${article.id}`)
    } catch (error) {
        res.render('articles/newArticle', {article:article})//if there's an error we'll render the page that the user was just on.
    }
})

module.exports = router;