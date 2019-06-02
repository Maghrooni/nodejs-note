import express = require('express')

var app = express();

app.get('/works', function (req, res) {
    res.send('Works !');
});

app.get('/info', function (req, res) {
    console.dir(req);
});

export default app;