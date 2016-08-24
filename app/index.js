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
const catImages = [1, 2, 3, 4, 5, 6];

app.get('/', function(request, response) {
    var random_motivation = pickOne(motivations);
    var image = pickOne(catImages);
    response.render('motivation', { motivation: random_motivation, image: image })
});

module.exports = app;
