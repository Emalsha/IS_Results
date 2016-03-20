var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views',(__dirname + '/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded

app.use('/public/stylesheets/style.css',express.static(__dirname + '/public/stylesheets/style.css'));
app.use('/public/javascripts/angular.min.js',express.static(__dirname + '/public/javascripts/angular.min.js'));
app.use('/public/javascripts/angularApp.js',express.static(__dirname + '/public/javascripts/angularApp.js'));

app.use('/', routes);

module.exports = app;