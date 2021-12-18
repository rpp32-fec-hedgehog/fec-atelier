const axios = require('axios');

//const GITHUB_API_TOKEN = require('.././env/config.js').GITHUB_API_TOKEN;
// const API_KEY = require('../env/dwightApiKey.js').API_KEY

const getProductDataByItem = (product_id) => {
  let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${product_id}`;
  return axios.get(endpoint, {
    headers : {
      // "Authorization" : API_KEY
    }
  })
  .catch((err) => {
    console.log(`Error fetching the product data ${err}`)
  })
}

const getReviewsByItem = (product_id, callback) => {
  console.log('get reviews by item fired: ', product_id);
  let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${product_id}`;
  axios.get(endpoint, {
    headers : {
      Authorization : process.env.API_KEY,
      //count: 20,
      //I'll need to take this in as a param in the future
      //sort: 'newest'
    }
  })
  .then((response) => {
    console.log('api call reports data back');
    callback(null, response);
  })
  .catch((error) => {
    console.log('Error fetching the ratings data: ', error)
    callback(error);
  })
}

const getReviewsMetaByItem = (product_id) => {
  let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${product_id}`;
  return axios.get(endpoint, {
    headers : {
      "Authorization" : GITHUB_API_TOKEN
    }
  })
  .catch((err) => {
    console.log('Error fetching the ratings metadata: ', err)
  })
}

//module.exports.getProductDataByItem = getProductDataByItem;

module.exports = {
  getProductDataByItem,
  getReviewsByItem,
  getReviewsMetaByItem
}
