const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {

    // ====================== Test Route
    
    app.get('/api', AuthorController.index)

    // ====================== DELETE Routes

    app.delete('/api/authors/:id', AuthorController.deleteById)
    
    // ====================== GET Routes
    
    app.get('/api/authors', AuthorController.getAll)
    app.get('/api/authors/:id', AuthorController.getById)

    // ====================== POST Routes
    
    app.post('/api/authors/new', AuthorController.create)

    // ====================== PUT Routes

    app.put('/api/authors/:id', AuthorController.updateById)
    
}