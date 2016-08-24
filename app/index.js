const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.use(express.static('./app/public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: './app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

const motivations = require('motivations');
const pickOne = require('pick-one');

app.get('/', function(request, response) {
    random_motivation = pickOne(motivations);
    response.render('motivation', { motivation: random_motivation })
});

module.exports = app;
