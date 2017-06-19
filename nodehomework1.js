var loremIpsum = require("lorem-ipsum")
const express = require('express');
const app = express();
var text = loremIpsum({
  count: 3,
  units: 'paragraphs',
  format: 'html'
});

app.get('/lorem', function (req, res){
  res.send(text)
})

app.listen(3000, function () {
  console.log('Example app listening to the port 3000')
})
