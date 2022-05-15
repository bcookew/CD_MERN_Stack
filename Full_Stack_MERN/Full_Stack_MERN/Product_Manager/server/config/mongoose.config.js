const mongoose = require('mongoose');
const { logMsg } = require('../../client/src/Accessories/LogFormatting');

mongoose.connect("mongodb://localhost/ProductManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(logMsg("Established a connection to the database!", true)))
    .catch(err => console.log(logMsg("Something went wrong connecting to DB!"),err))