const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ProductManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(
`
    ------------------------------------------
    Established a connectioon to the database!
    ------------------------------------------
`))
    .catch(err => console.log(
`
    \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
    Something went wrong connecting to DB!
    /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
`,err))