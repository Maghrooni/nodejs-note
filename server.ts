import express = require('express')

var app = express();

app.get('/works', function (req, res) {
    res.send('Works !');
});

app.get('/info',function (req,res) {
   console.dir(req);
});

app.listen(1500, 'localhost', function (err) {
    if (err) {
        return console.log(`Error : ${err}`);
    }

    console.log('Success !');
});