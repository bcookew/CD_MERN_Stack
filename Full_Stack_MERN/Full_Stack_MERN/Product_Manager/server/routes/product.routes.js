const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    
    // ====================== GET Routes
    
    app.get('/api', ProductController.index)
    app.get('/api/products', ProductController.getAllProducts)
    app.get('/api/products/:id', ProductController.getProductById)

    // ====================== POST Routes
    
    app.post('/api/product/new', ProductController.createProduct)
}