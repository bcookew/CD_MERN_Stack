const {Author} = require('../models/author.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Request Response Successful"
    })
}

// ====================== Create new Author

module.exports.create = (req, res) => {
    const {name} = req.body;
    Author.create({name})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

// ====================== Get all Products

module.exports.getAll = (req, res) => {
    Author.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

// ====================== Get Author by Id

module.exports.getById = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

// ====================== Update Author by Id

module.exports.updateById = (req, res) => {
    console.log(req.body);
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err))
}

// ====================== Delete Author by Id

module.exports.deleteById = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(confirmSuccess => res.json(confirmSuccess))
        .catch(err => res.json(err))
}