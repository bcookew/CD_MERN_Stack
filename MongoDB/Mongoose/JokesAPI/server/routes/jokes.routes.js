const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes/", JokesController.getAllJokes);
  app.get("/api/jokes/:id", JokesController.findOneJoke);
  app.put("/api/jokes/update/:id", JokesController.updateJoke);
  app.post("/api/jokes/new", JokesController.createJoke);
  app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
};