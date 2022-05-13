const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then(jokes => res.json({ users: jokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(joke => res.json({ user: joke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => res.json({ user: newJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ user: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
