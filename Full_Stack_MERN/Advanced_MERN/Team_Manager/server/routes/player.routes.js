const PlayerController = require('../controllers/player.controller');

module.exports = (app) => {

    // ====================== Test Route
    
    app.get('/api', PlayerController.index)

    // ====================== DELETE Routes

    app.delete('/api/players/:id', PlayerController.deleteById)
    
    // ====================== GET Routes
    
    app.get('/api/players', PlayerController.getAll)
    app.get('/api/players/:id', PlayerController.getById)

    // ====================== POST Routes
    
    app.post('/api/players/new', PlayerController.create)

    // ====================== PUT Routes

    app.put('/api/players/:id', PlayerController.updateById)
    
}