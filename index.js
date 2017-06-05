var express = require('express');

var app = express();

var port = 443;

//Route
app.get('/', function(req, res){
    res.send('Hello, World');
});

app.listen(port, function(err){
    console.log('running server on port: ' + port);
});