const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const apiCalls = require('../utils/apiCalls.js');

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Overview routes to be added
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

app.post('/reviews/meta', (req, res) => {
  let product = req.body.data.product_id;
  apiCalls.getReviewsMetaByItem(product, (reviewsData) => {
    res.send(reviewsData);
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
