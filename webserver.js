var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var databaseUrl = "mydb";
var collections = ["cards"];
var mongojs = require("mongojs");
var ObjectId = mongojs.ObjectId;
var db = mongojs.connect(databaseUrl, collections);

app.use(bodyParser.json());
app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));

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
        if( err || !saved ) console.log("Card not saved: " + err);
        else console.log("Card saved");
        response.sendStatus(200);
    });
});

app.delete('/cards/:id', function(request, response) {
    var id = request.params.id;
    console.log("Deleting: " + id);
    db.cards.remove({_id: ObjectId(id)}, function(err) {
        if (!err) {
            console.log("Deleted!");
            response.sendStatus(200);
        } else {
            console.log("Could not delete: " + err);
            response.sendStatus(500);
        }

    });
});

app.listen(3000, function() {
    console.log("Web server started. Listening on port 3000.");
});