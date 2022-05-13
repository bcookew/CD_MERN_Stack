const {Product} = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Request Received"
    })
}

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