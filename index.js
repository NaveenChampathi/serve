var express = require('express');
var mongoose = require('mongoose');
var collectn = require('./Collectn.model');
mongoose.connect('mongodb://localhost/test');

var app = express();

app.get('/', function(req, res) {
    collectn.find({ name: 'Varma' }).exec(function(err, collectn) {
        res.send(collectn);
    });
    //res.send('Hey Naveen!');
});

app.listen(3000, function() {
    console.log('Listening on 3000');
});
