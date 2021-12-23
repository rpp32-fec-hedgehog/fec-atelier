const axios = require('axios');

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
    .catch(e=>e);
  };
