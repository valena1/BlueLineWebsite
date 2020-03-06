var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

let index = require('./controllers/control.js');
app.use('/', index);

app.listen(8084, '127.0.0.1');