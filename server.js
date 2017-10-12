var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(process.cwd() + '/public'));


if(process.env.NODE_ENV == 'production'){
  mongoose.connect('mongodb://heroku_<dbuser>:<dbpassword>@ds115085.mlab.com:15085/article');
  // var MongoClient = mongodb.MongoClient;
  // var url = 'mongodb://<dbuser>:<dbpassword>@ds115085.mlab.com:15085/article');
}
else{
  mongoose.connect('mongodb://localhost/nytreact');
}
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var Article = require('./models/Article.js');

var router = require('./controllers/controller.js');
app.use('/', router);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});
