const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('/', function(req, res) {
//   res.status(200);
//   res.end();
// })

app.get('/qa/questions', function(req, res) {
  // const getProductQuestionData = require('../utils/apiCalls');
  // console.log(getProductQuestionData());

  res.send();
})

app.listen(port, () => {
  console.log('Listening on port 3000');
});
