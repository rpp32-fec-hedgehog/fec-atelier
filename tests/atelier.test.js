const axios = require('axios');
const server = require('./testIndex.js');

const getProductDataByItem = require('../utils/apiCalls.js').getProductDataByItem;

// beforeAll((done) => {
//   done();
// })

// afterAll((done) => {
//   done();
// })

// ========== Overview ========== //
describe('Overview', function() {
  describe('Gather API data', function() {

    test('should GET (ratings numbers) from Reviews API for StarRating component', function() {
      // logic to check if data is being recieved from reviews API
    })

    test('should GET (name, category and price data) from Products API for StarRating component', function() {
      // logic to check if data is being recieved from products API
    })

    test('should GET (thumbnails) from Products API for StyleSelector component', function() {
      // logic to check if data is being recieved from products API
    })

    test('should GET (image url) from Products API for ImageGallery component', function() {
      // logic to check if data is being recieved from products API
    })

    test('should GET (size count and quantity) from Products API for AddToCart component', function() {
      // logic to check if data is being recieved from products API
    })

    test('should POST Cart data', function() {
      // logic to check if data is being posted to cart API
    })

  })
})

// ========== Related Products ========== //
describe('Related Products', function() {

})

// ========== Questions & Answers ========== //
describe('Questions & Answers', function() {

})

// ========== Ratings & Reviews ========== //
describe('Ratings & Reviews', function() {

})
