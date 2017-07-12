const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('data.js');
const app = express();

app.engine('mustache', mustacheExpress());

app.get('/directory/'), function ( req, res) {
  res.render('directory', )
});










app.listen(3000, function () {
  console.log('Successfully started express application!');
})
