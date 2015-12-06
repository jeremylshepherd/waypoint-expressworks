var exp = require("express");
var app = exp();
var path = require("path");

app.put('/message/:id', function(request, response){
    var id = request.params.id;
    var mess = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex');
    response.send(mess);
})

app.listen(process.argv[2]);

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    
    app.put('/message/:id', function(req, res){
      var id = req.params.id
      var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
      res.send(str)
    })
    
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────
*/