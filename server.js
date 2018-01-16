var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var messages = [{text: 'some text', owner: 'Bob'},{text: 'other message', owner: 'Janie'}];

app.use(bodyParser.json()); // body-parser's middleware

app.use((req, res, next) => { // CORS because the ports are different URLS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}) // middleware must be above routes

app.get('/', (req, res) => {
  res.redirect('/messages');
})

app.get('/messages', (req, res) => {
  res.json(messages);
})

app.post('/message', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})

// app.get('/api/messages', (req, res) => { you could do this instead of the api.js and messages-mock
//   res.json(messages);
// })

var apiRoutes = require('../backend/api')(app);

app.listen(1234);
