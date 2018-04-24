var path = require('path');

//Export HTML Routes
module.exports = function(app) {

    //Home page
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //Survey page
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};


/*var express = require("express");

var app = express();
var PORT = 8080;

app.get("../../public/survey.html", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
  });*/
  

