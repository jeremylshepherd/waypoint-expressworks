var exp = require("express");
var app = exp();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(request, response){
   response.send(request.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var bodyParser = require('body-parser')
    var app = express()
    
    app.use(bodyParser.urlencoded({extended: false}))
    
    app.post('/form', function(req, res) {
      res.send(req.body.str.split('').reverse().join(''))
    })
    
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────
*/