var express = require('express');
var app = express();
var path = require('path');

app.use(express.statis('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "form.html"))
});

app.get('/process_get', function(req, res) {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(5000, function () {
    console.log("Express App running on port 5000");
});