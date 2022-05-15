const express = require('express');
const app = express();
const cors = require('cors');
const { logMsg } = require('./client/src/Accessories/LogFormatting');
const port = 8000;
require('./server/config/mongoose.config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./server/routes/product.routes')(app)

app.listen(port, () => console.log(logMsg(`Express server now listening on port: ${port}`, true)))