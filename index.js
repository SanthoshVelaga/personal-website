const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const exphbs  = require('express-handlebars');

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

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');