var exp = require('express');
var app = exp();

app.get('/search', function(request, response){
    response.send(request.query);
})



app.listen(process.argv[2]);

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    
    app.get('/search', function(req, res){
      var query = req.query
      res.send(query)
    })
    
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────
*/