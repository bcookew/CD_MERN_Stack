const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must submit an Author"],
        minlength: [3, "Author Name length must be at least 3 chars!"]
    },
}, {timestamps:true})

module.exports.Author = mongoose.model('author', AuthorSchema);