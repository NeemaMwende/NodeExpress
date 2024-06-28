var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "form.html"))
});

var server = app.listen(5000, function () {
    console.log("Express App running on port 5000");
});