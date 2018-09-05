var express = require('express');
var app = express();
var ejs = require('ejs');




app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
  });
  
  app.listen(8000);