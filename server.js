const express = require('express')
const  articleRouter= require('./routes/articles')
const app = express();



// view engine setup
app.set('view engine', 'ejs');

// Register routers 
app.use('/articles', articleRouter)

app.get('/', (req, res)=>{
    const articles =[{
        title      : "In And About The Most Beautiful Holiday Destinations ",
        author     : "Baki Sparks",
        content    : " Here's an overview of the worlds most beautiful holiday destinations",
        imageUrl   : "",
        createdAt  : Date.now()

    }]
    res.render('index', {articles: articles});
})
app.listen(5000)