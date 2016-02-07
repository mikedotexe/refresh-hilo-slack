var express = require('express'),
    bodyParser = require('body-parser'),
    mongo = require('mongodb'),
    // refresh = require('./refresh'),
    app = express(),
    port = process.env.PORT || 3000;

// example curl command:
// curl -H "Content-Type: application/json" -X POST -d @manual-test.json http://refresh-slack.dev:3000/train
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// classic Hello World
app.post('/', function (req, res) {
  res.status(200).send('Aloha Honua')
});



// post route for train
app.post('/train', function (req, res) {
  console.log('body');
  console.log(req.body);
  console.log('channel');
  console.log(req.body.channel_id);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

// using mongo for any sort of settings for a future slack.mikedotexe.com site
// var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/rh", function(err, db) {
//   if (err) { return console.dir(err); }

//   var collection = db.collection('token');
//   var stream = collection.find({type:"test"}).stream();
//   stream.on("data", function(item) {
//     console.log(item);
//     token.webhook = item.t;
//   });
//   stream.on("end", function() {});
// });


// useful to know when running 'heroku local' or viewing in 'heroku logs'
app.listen(port, function () {
  console.log('Slack bot lives at port ' + port);
});