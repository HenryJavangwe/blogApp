const express = require('express')
const mongoose = require('mongoose') 
const articleRouter= require('./routes/articles')
const app = express()
const path = require('path')

mongoose.connect(`mongodb://localhost/blog`, { useNewUrlParser: true, useUnifiedTopology: true })

// view engine setup
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

// Register routers 
app.use(express.urlencoded({ extended: false }));//telling the app to use that. this means we can access all our article params from the article router by accessing req.body.(here goes what you want to access e.g title or id etc.)
app.use('/articles', articleRouter)



app.get('/', (req, res)=>{
    const articles =[
        {
            title      : "In And About The Most Beautiful Holiday Destinations ",
            author     : "Baki Sparks",
            content    : " Here's an overview of the worlds most beautiful holiday destinations",
            imageUrl1   : "https://images.unsplash.com/photo-1517926967795-31943e805dae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            imageUrl2   : "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
            createdAt  : new Date()
        },
        {
            title      : " The World Wild Beauty",
            author     : "Baki Sparks",
            content    : " Here's an overview of the worlds most beautiful natural spaces",
            imageUrl1   : "https://images.unsplash.com/photo-1588189697996-df0739f187e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
            imageUrl2:"https://images.unsplash.com/photo-1587852769298-7dae101bc745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            createdAt  : new Date()
        }
    ]
    res.render('articles/index', {articles: articles});
})


app.listen(5000) 