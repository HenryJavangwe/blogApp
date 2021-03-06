const express = require('express')
const mongoose = require('mongoose') 
const Article = require ('./models/articles')
const articleRouter= require('./routes/articles')
const app = express()
const path = require('path')
const methodOverride = require('method-override')


mongoose.connect(`mongodb://localhost/blog`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

// view engine setup
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride('_method'))//whenever we set the param _method in a form, it'll override the method. if we pass _method of DELETE, It'll allow us to call the delete router. 

// Register routers 
app.use(express.urlencoded({ extended: false }));//telling the app to use that. this means we can access all our article params from the article router by accessing req.body.(here goes what you want to access e.g title or id etc.)
app.use('/articles', articleRouter)



app.get('/', async (req, res)=>{
    let articles = await Article.find().sort({
        createdAt: 'desc'});
    res.render('articles/index', {articles: articles});
})


app.listen(8080) 

// installed two new libraries --> marked and slugify and updated npm version.
