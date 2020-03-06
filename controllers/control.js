var express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var orderModel = require('../models/order.js');

router.get('/', function (req, res) {
    res.render("index.ejs");
});

router.get('/order', function (req, res) {
    var orderModel = require('../models/order.js');
    console.log(req.body);
    res.render("order", {order:req.body});
});

router.post('/followup', urlencodedParser, function(req, res) {
    var orderModel = require('../models/order.js');
    // send email here
    console.log('Data: ', req.body);
    res.render('followup', {order:req.body});
});

router.get('/faq', function (req, res) {
    var faq = require('../utilities/faq.json');
    res.render("faq", {faq: faq.questions});
});

router.get('/contact', function (req, res) {
    console.log(req.body);
    res.render("contact");
});

router.post('/followup1', urlencodedParser, function(req, res) {
    console.log('Data: ', req.body);
    res.render('followup1');
})

router.get('/photos', function (req, res) {
    res.render("photos.ejs");
});

module.exports = router;