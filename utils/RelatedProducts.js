const axios = require('axios');

//Returns the related products to a specified product ID//
module.exports.getRelated = (id) => {
  let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/?product_id=${id}/related`;

  return axios.get(endpoint, {
    headers: {
      'Authorization': process.env.API_KEY
    }
  })
    .then(result => {
      return result.data;
    })
    .catch(e => e);
};


//Returns the image url for the requested product ID//
module.exports.getRelatedImage = (id) => {
  let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/?product_id=${id}/styles`;

  return axios.get(endpoint, {
    headers: {
      'Authorizaion': process.env.API_KEY
    }
  })
    .then(result => {
      console.log('Result from the style call: ', result)
    }).catch(e => e);
}


//Returns an array of products ID numbers for the supplied products array//

module.exports.getRelatedIds = (products) => {
  return products.map(item => item.id)
};