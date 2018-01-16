var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = require('./messages-mock')();

app.use(bodyParser.json()); // body-parser's middleware

app.use((req, res, next) => { // CORS because the ports are different URLS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}) // middleware must be above routes

var api = express.Router();

api.get('/', (req, res) => {
    res.redirect('/messages');
})
  
api.get('/messages', (req, res) => {
    res.json(messages);
})

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
})

app.use('/api', api);

app.listen(63145);
