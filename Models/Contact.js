const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    name : String,
    old : Number,
    email : {type : String, required : true, unique : true}
})
module.exports = mongoose.model('Contact', ContactSchema)