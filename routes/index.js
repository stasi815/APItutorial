const session = require('./session');
const user = require('./user');
const message = require('./message');
export default {
  session,
  user,
  message,
};

// index routes
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });