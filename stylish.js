var exp = require("express");
var path = require("path");
var app = exp();

app.use(exp.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));

app.listen(process.argv[2]);

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    
    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));
    
    
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────
*/