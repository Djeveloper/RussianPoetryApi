const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(8008, () => {
  console.log('App listening on port 8008');
})
