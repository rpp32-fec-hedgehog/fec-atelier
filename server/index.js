const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const apiCalls = require('../utils/apiCalls.js');

console.log(path.join(__dirname, '..', '/client/dist'));

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/products/:product_id', (req, res) => {
  let product = req.params.product_id;
  apiCalls.getProductDataByItem(product, (data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log('Listening on port 3000');
});
