var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var databaseUrl = "mydb";
var collections = ["cards"];
var db = require("mongojs").connect(databaseUrl, collections);

app.use(bodyParser.json());
app.use(express.static('app'));

app.get('/cards', function(request, response) {
    db.cards.find(function(err, cards) {
        if( err ) {
            console.log("Cards not found");
        }
        else {
            console.log("Cards found");
            response.json(cards);
        }

    });
});

app.post('/cards', function(request, response) {
    db.cards.save(request.body, function(err, saved) {
        if( err || !saved ) console.log("Card not saved");
        else console.log("Card saved");
        response.end();
    });
});

app.listen(3000, function() {
    console.log("Web server started. Listening on port 3000.");
});