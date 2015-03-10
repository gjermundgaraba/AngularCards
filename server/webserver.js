var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static('app'));

var cards = [
    {
        "title": "This is a title",
        "body": "This is a body",
        "createdAt": +new Date()
    }
];

app.get('/cards', function(request, response) {
    response.json(cards);
});

app.post('/cards', function(request, response) {
    cards.push(request.body);
    response.json(request.body);
});

app.listen(3000, function() {
    console.log("Web server started. Listening on port 3000.");
});