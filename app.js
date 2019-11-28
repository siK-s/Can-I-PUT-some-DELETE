const express = require('express');
const app = express();
const port = 8080;

const users = require('./routes/index');

app.set('view engine', 'pug');

app.use('/users', users);

app.listen(port, err => {
  if (err) {
    throw new Error('Houston... something bad happened...');
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
