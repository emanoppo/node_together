const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.send('HELLO WORLD!');
});

module.exports = app;
