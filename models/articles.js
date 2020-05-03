// we'll use mongoose in here so
const mongoose = require('mongoose')


// create a schema

const articleSchema = new mongoose.Schema({
    title: {
        type    : String,
        required:true
    },
    author: {
        type    : String,
        required:true
    },
    content: {
        type    : String,
        required:true
    },
    imageUrl1: {
        type    : String,
    },
    imageUrl2: {
        type    : String,
    },
    createdAt: {
        type    : Date,
        default: new Date()
    }
})

// in-order to use this schema we need to export it

module.exports =  mongoose.model('Article', articleSchema);