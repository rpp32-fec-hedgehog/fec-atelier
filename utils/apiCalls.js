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