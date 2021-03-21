const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const emailRoutes = require('./src/routes/email.routes');

app.use('/api/emails/', emailRoutes);

app.listen(port, function () {
    console.log(`Server is listening on ${port}`);
});


