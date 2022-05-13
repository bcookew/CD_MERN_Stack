const express = require('express');
const app = express();
const port = 8000;

require('./server/routes/person.routes')(app)

app.listen(port, () => console.log(`
------------------------------------------
Express server now listening on port: ${port}
------------------------------------------
`))