const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "What's a joke without a setup?"],
		minlength: [10, "Setups should be at least 10 chars..."]
	},
	punchline: {
		type: String,
		required: [true, "What's a joke without a punchline?"],
		minlength: [3, "Setups should be at least 3 chars..."]
	} 
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;