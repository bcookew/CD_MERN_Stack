const ProductController = require('../controllers/product.controller');

module.exports = (app) => {

    // ====================== DELETE Routes

    app.delete('/api/products/:id', ProductController.deleteById)
    
    // ====================== GET Routes
    
    app.get('/api', ProductController.index)
    app.get('/api/products', ProductController.getAll)
    app.get('/api/products/:id', ProductController.getById)

    // ====================== POST Routes
    
    app.post('/api/product/new', ProductController.create)

    // ====================== PUT Routes

    app.put('/api/products/:id', ProductController.updateById)
    
}