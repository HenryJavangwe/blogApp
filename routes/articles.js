const express = require('express');
const Article = require('./../models/articles')
const router = express.Router(); //this will give us a router that'll use to create views.

router.get('/newArticle', (req, res)=>{
    res.render('articles/newArticle', {article: new Article()})//here we render a page that we'll place inside articles and we're going to call it newArticle.
});
//here we create our edit route which is similar to the new route.
router.get('/edit/:id', async (req, res)=>{
    const article = await  Article.findById(req.params.id)
    res.render('articles/edit', {article: article})
});
//every time we pass in a router with  a /articles/something, if it's not new it'll go to this id(now slug instead) param, essentially we're redirecting the user this router.first we grab a hold of an article by article.findById(req.params.id) then we can render the page by res.render('articles/show', {article: article}). the /show is the page that'll we'll show and we're passing in an article we just created by querying the database 

router.get('/:slug', async (req, res)=>{
    const article = await Article.findOne({ slug: req.params.slug})
    if(article == null)res.redirect('/')//if an article is not found, the user will be redirected ti the home page. 
    res.render('articles/show', {article: article})
})
// we'll use async because it's an async function and we'll await when we save our article.
router.post('/', async (req, res)=> {
    let article = new Article({
        title   : req.body.title,
        author  : req.body.author,
        markdown : req.body.markdown,
        imageUrl1 : req.body.imageUrl1,
        imageUrl2 : req.body.imageUrl2,
        createdAt : req.body.createdAt,
    })
// Used the try-catch to catch and print out an error to the user if there's any and if not we'll redirect out user to a page that is at /articles/id and  
    try {
            article = await article.save();
            res.redirect(`/articles/${article.slug}`)
    } catch (error) {
        console.log(error)
        res.render('articles/newArticle', {article:article})//if there's an error we'll render the page that the user was just on.
    }
})


// creating a delete router
//its an async function since we're going to be deleting articles, which is asynchronous
router.delete('/:id', async (req, res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')//this will find the article by id, delete it and then redirect to the home page.
})

module.exports = router;