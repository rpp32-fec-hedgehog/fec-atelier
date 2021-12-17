const express = require('express');
const path = require('path');
const { getReviewsByItem, getReviewsMetaByItem } = require('.././utils/apiCalls.js');

const app = express();
const port = 3000;

console.log(path.join(__dirname, '..', '/client/dist'));

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/ratings', function(req, res, next) {
  console.log('server recieves review item number from client: ', req.headers.item_id);

  getReviewsByItem(req.headers.item_id, (err, result) => {
    if (err) {
      console.log('server reports error retriving reviews: ', err);
      res.status(401); //what's an easy way to grab this?
      res.end();

    } else {
      console.log('server reports review data from api: ', result);
      res.status(200);
      res.end();
    }
  })


})

app.listen(port, () => {
  console.log('Listening on port 3000');
});
