/**
 * Created by ifelsc on 9/27/2017.
 */
var express = require('express');
var request = require('supertest');
var router = require('../../../controllers');

var app = express()
app.use(router)

module.exports = request(app)