const mongoose = require('mongoose')
const {marked} = require('marked')
const slugify =require('slugify')
const createDOMPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDOMPurify(new JSDOM().window)

 const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        markdown:{
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        slug:{
            type: String,
            required: true,
            unique: true
        },
        sanitizadHtml:{
            type:String,
            required: true
        }
    },
    {
        versionKey: false
    }
 )

 //middleware .pre()

articleSchema.pre('validate', function (next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true})
    }
    if(this.markdown){
        this.sanitizadHtml = dompurify.sanitize(marked(this.markdown))
    }
    next();
})

 module.exports = mongoose.model('Article', articleSchema)
