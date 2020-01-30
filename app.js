const uuidv4 = require('uuid/v4');

const routes = require('./routes')
const models = require('./models');
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(3000, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

