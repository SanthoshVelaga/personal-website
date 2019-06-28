const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const exphbs  = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

app.get('/bio', function (req, res) {
    res.render('bio');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');