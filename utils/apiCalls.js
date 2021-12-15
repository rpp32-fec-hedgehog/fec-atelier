const axios = require('axios');
const API_KEY = require('../env/dwightApiKey.js').API_KEY

const getProductDataByItem = (product_id) => {
  let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${product_id}`;
  return axios.get(endpoint, {
    headers : {
      "Authorization" : API_KEY
    }
  })
  .catch((err) => {
    console.log(`Error fetching the product data ${err}`)
  })
}

module.exports.getProductDataByItem = getProductDataByItem;
//import axios from 'axios';

//changed mine to js as I wanted to use the linter and added it to my gitignore. I can change back to env if that is needed.
// import GITHUB_API_TOKEN from '.././env/config.js';

// let getReviewsByItem = function(productId) {
//   let headerVals = {
//     Authorization: GITHUB_API_TOKEN,
//     count: 20,
//     //I'll probably need to take this in as a param in the future
//     sort: newest
//   };

//   let options = {
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}`,
//     headers: headerVals
//   };

//   axios(options)
//     .then((response) => {
//       callback(null, response.data);
//     })
//     .catch((error) => {
//       callback(error.message);
//     })
// }

// let getReviewsMetaByItem = function(productId) {
//   let headerVals = {
//     Authorization: GITHUB_API_TOKEN,
//   };

//   let options = {
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`,
//     headers: headerVals
//   };

//   axios(options)
//     .then((response) => {
//       callback(null, response.data);
//     })
//     .catch((error) => {
//       callback(error.message);
//     })
// }

// module.exports = {
//   getReviewsByItem,
//   getReviewsMetaByItem
// }
