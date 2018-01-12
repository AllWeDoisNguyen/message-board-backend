var express = require('express');
var app = express();

var messages = [{text: 'some text', owner: 'Tim'},{text: 'other message', owner: 'Jane'}];

app.get('/', (req, res) => {
  res.redirect('/messages');
})

app.get('/messages', (req, res) => {
  res.json(messages);
})

app.listen(1234);
