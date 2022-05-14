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

module.exports.createProduct = (req, res) => {
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

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

// ====================== Get Product by Id

module.exports.getProductById = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// #########################
// ############################  -- UPDATE --
// #########################




// #########################
// ############################  -- DELETE --
// #########################
