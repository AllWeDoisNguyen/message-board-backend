var express = require('express');
var app = express();

var messages = [{text: 'some text', owner: 'Bob'},{text: 'other message', owner: 'Janie'}];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => {
  res.redirect('/messages');
})

app.get('/messages', (req, res) => {
  res.json(messages);
})

var apiRoutes = require('../backend/api')(app);

app.listen(1234);
