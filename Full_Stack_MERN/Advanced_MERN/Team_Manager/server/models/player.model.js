const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    gameNumber: Number,
    isPlaying: {
        type: Number,
        default: 0 
    }
})

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player Name is Required"],
        minlength: [3, "Player Name must be at least 3 chars!"]
    },
    preferredPosi: String,
    games: {
        type: [Number],
        default: [0,0,0] // 0 = Undecided, 1 = Not Playing, 3 = Playing
    },
}, {timestamps:true})

module.exports.Player = mongoose.model('player', PlayerSchema);