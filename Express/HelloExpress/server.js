const express = require("express");
const app = express();
const port = 8000;

// app settings
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send([
    {
      Message: "This is the FIRST message within JSON",
      Number: Math.random()
    },
    {
      Message: "This is the second message within JSON",
      Number: Math.random()
    },
    {
      Message: "This is the Third message within JSON",
      Number: Math.random()
    }
  ]);
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
