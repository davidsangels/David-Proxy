
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const request = require('request');
var httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const data = 'http://localhost:3001'
const port = 3000;

server.use(bodyParser());
server.use(express.static('public'));
server.listen(port, () => console.log(`proxy server listening on port : ${port}`));

server.get('/data', (req , res) => {
  console.log('server reached');
  apiProxy.web(req, res, {target: data});

})




module.exports = server;