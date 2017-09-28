/**
 * Created by ifelsc on 9/4/2017.
 */
var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.status(200).send('Hello There');
});

app.listen(8888);