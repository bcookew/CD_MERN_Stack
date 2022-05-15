const {Product} = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Request Received"
    })
}

// #########################
// ############################  -- CREATE --
// #########################

// ====================== Create new Product

module.exports.create = (req, res) => {
    const {name, price, description} = req.body;
    Product.create({
        name,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

// #########################
// ############################  -- READ --
// #########################

// ====================== Get all Products

module.exports.getAll = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

// ====================== Get Product by Id

module.exports.getById = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// #########################
// ############################  -- UPDATE --
// #########################

// ====================== Update Product by Id

module.exports.updateById = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

// #########################
// ############################  -- DELETE --
// #########################

// ====================== Delete Product by Id

module.exports.deleteById = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(confirmSuccess => res.json(confirmSuccess))
        .catch(err => res.json(err))
}