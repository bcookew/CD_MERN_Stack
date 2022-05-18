const { logMsg } = require('../../client/src/Accessories/LogFormatting');
const {Player} = require('../models/player.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Request Response Successful"
    })
}

// ====================== Create new Player

module.exports.create = (req, res) => {
    const {name, preferredPosi} = req.body;
    Player.create({name, preferredPosi})
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err))
}

// ====================== Get all Players

module.exports.getAll = (req, res) => {
    Player.find({})
        .then(Players => res.json(Players))
        .catch(err => res.json(err))
}

// ====================== Get Player by Id

module.exports.getById = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => res.json(err))
}

// ====================== Update Player by Id

module.exports.updateById = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedPlayer => {
            res.json(updatedPlayer)
        })
        .catch(err => res.status(400).json(err))
}


// ====================== Delete Player by Id

module.exports.deleteById = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(confirmSuccess => res.json(confirmSuccess))
        .catch(err => res.json(err))
}