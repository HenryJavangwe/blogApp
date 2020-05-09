// we'll use mongoose in here so
const mongoose = require('mongoose')
const marked = require('marked')//allows us to convert markdown to html
const slugify = require('slugify')//allows us to convert something like our title to a url from slug.
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
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
})

articleSchema.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true
        })
    }
    next()
})

// in-order to use this schema we need to export it

module.exports =  mongoose.model('Article', articleSchema);