const axios = require('axios');
const $ = require('jquery');

// Return an array of related products to a specified product ID //

module.exports.getRelatedItems = (id) => {
  let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/?product_id=${id}/related`;

  return axios.get(endpoint, {
    headers: {
      'Authorization': process.env.API_KEY
    }
  })
    .then(result => {
      return result.data;
    }).catch(e => e);
};


// Returns and array of the image url for the requested product IDs //

module.exports.getRelatedImages = (productArray) => {

  return Promise.all(productArray.map(item => {
    let id = item.id;
    let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`;

    return axios.get(endpoint, {
      headers: {
        'Authorization': process.env.API_KEY
      }
    })
      .then(result => {
        return result;
      }).catch(e => e);
  }))
    .then(values => {
      let styles = values.map(item => {
        return item.data
      })
      return styles
    })
    .catch(e=>e);
};
