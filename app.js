const express = require('express');
const bodyParser = require('body-parser');

//router imports
const feedRoutes = require('./routes/feed');
const dbRoutes = require('./routes/db');
const knexRoutes = require('./routes/knex');

const app = express();


app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// })

//routes
app.use(feedRoutes);
app.use(dbRoutes);
app.use(knexRoutes)


app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
});


app.listen(8000);
