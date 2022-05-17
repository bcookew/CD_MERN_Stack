const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    gameNumber: Number,
    isPlaying: {
        type: Number,
        default: 0 // 0 = Undecided, 1 = Not Playing, 3 = Playing
    }
})

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must submit an Author"],
        minlength: [3, "Author Name length must be at least 3 chars!"]
    },
    preferredPosi: String,
    games: [GameSchema],
}, {timestamps:true})

module.exports.Player = mongoose.model('player', PlayerSchema);