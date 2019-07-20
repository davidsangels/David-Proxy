
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var httpProxy = require('http-proxy');
const reservationServer = 'http://13.57.205.162';
const reviewsServer = 'http://18.224.181.77';
const data = 'http://13.56.158.243';

const apiProxy = httpProxy.createProxyServer();

const port = 3000;

app.use(bodyParser());
app.use('/:id',express.static('public'));

// app.use('/:id'express.static('public'));
app.listen(port, () => console.log(`proxy server listening on port : ${port}`));

app.get('/bookings/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reservationServer});
});


// Get all the reviews for a specific place
app.get('/reviews/:idPlace', (req, res) => {
apiProxy.web(req, res, {target: reviewsServer});
});

// Get all the ratings for a specific place
app.get('/ratings/:idPlace', (req, res) => {
apiProxy.web(req, res, {target: reviewsServer});
});

// Get all the reviews for a specific query and a specific idPlace
app.get('/reviews/search/:idPlace/:query', (req, res) => {
apiProxy.web(req, res, {target: reviewsServer});
});

//David's image data
app.get('/data/:id', (req , res) => {
  apiProxy.web(req, res, {target: data});
});
module.exports = app;