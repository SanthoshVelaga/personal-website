const express = require('express');
const app = express();
const path = require('path');
const exphbs  = require('express-handlebars');
const compression = require('compression')

app.use(compression())

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', { title: 'Home'});
});

app.get('/portfolio', function (req, res) {
    res.render('portfolio', { title: 'Portfolio'} );
});

app.get('/bio', function (req, res) {
    res.render('bio', { title: 'Bio'});
});

app.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact'});
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

