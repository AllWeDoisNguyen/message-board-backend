var messages = require('./messages-mock')();

module.exports = app => {  

    app.get('/api/messages', (req, res) => {
        res.json(messages);
    })

    app.get('/', (req, res) => {
        res.redirect('/messages');
    })
      
    app.get('/messages', (req, res) => {
        res.json(messages);
        // console.log(messages);
    })

    // if I am using this file, I have to put the post function here
    // not sure how to organize the api versus the server. 

    app.post('/message', (req, res) => {
        // console.log(req.body);
        messages.push(req.body);
        // console.log(messages);
        res.sendStatus(200);
    })
}