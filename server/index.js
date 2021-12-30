const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

const apiCalls = require('../utils/apiCalls.js');


app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ========== Shared ========== //

// ========== Overview ========== //

app.get('/products/:product_id', (req, res) => {
  let product = req.params.product_id;
  apiCalls.getProductDataByItem(product, (data) => {
    res.send(data);
  })
})

app.get('/products/:product_id/styles', (req, res) => {
  let product = req.params.product_id;
  apiCalls.getProductStylesByItem(product, (styleData) => {
    res.send(styleData);
  })
})

app.post('/cart', (req, res) => {
  apiCalls.addProductToCart(req.body.sku_id, (result) => {
    res.send(result);
  })
})

// ========== Related Products ========== //

// ========== Questions & Answers ========== //

app.get('/qa/questions/:product_id', function(req, res) {
  let product = req.params.product_id;

  apiCalls.getProductQuestionData(product, (questions) => {
    res.send(questions);
  })
})

// ========== Ratings & Reviews ========== //

app.get('/ratings', function(req, res, next) {
  apiCalls.getReviewsByItem(req.headers.item_id, (err, results) => {
      let ratings = results.data.results;
      res.send(ratings);
    }
  )
})

app.post('/reviews/meta', (req, res) => {
  let product = req.body.data.product_id;
  apiCalls.getReviewsForOverview(product, (reviewsData) => {
    res.send(reviewsData);
  })
})

// ========== Server Listen ========== //

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
