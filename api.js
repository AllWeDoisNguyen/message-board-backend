var messages = require('./messages-mock')();

module.exports = app => {  

    app.get('/api/messages', (req, res) => {
        res.json(messages);
    })




}