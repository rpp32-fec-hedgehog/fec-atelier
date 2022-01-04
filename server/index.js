const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

const apiCalls = require('../utils/apiCalls.js');
const { getRelated }= require('../utils/RelatedProducts');


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

app.get('/relatedItems', (req, res) => {
  let item_id = req.query.item_id;
  getRelated(item_id)
    .then(e => res.status(200).send(e)).catch(e=>e);
});


// ========== Questions & Answers ========== //

app.get('/qa/questions/:product_id', function(req, res) {
  let product = req.params.product_id;
  apiCalls.getProductQuestionData(product, questions => {
    res.send(questions);
  })
})

app.put('/qa/questions/:question_id/helpful', function(req, res) {
  let question = req.params.question_id;
  apiCalls.markQuestionHelpful(question, response => {
    res.send(response);
  })
})

app.put('/qa/answers/:answer_id/helpful', function(req, res) {
  let answer = req.params.answer_id;
  apiCalls.markAnswerHelpful(answer, response => {
    res.send(response);
  })
})

app.put('/qa/answers/:answer_id/report', function(req, res) {
  let answer = req.params.answer_id;
  apiCalls.reportAnswer(answer, response => {
    res.send(response);
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
