const express = require('express');
const app = express();

const motivations = require('motivations');
const pickOne = require('pick-one');

app.get('/', function(request, response) {
    random_motivation = pickOne(motivations);
    response.send(random_motivation);
});

module.exports = app;
