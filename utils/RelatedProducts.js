const axios = require('axios');

module.exports.getRelated = (id) => {
  let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/?product_id=${id}/related`;

  return axios.get(endpoint, {
    headers: {
      'Authorization': process.env.API_KEY
    }
  })
    .then(result => {
      console.log('Successful Result', result.data)
      return result.data;
    })
    .catch(e=>e);
  };


  // let items = result.data;
  // let relatedItems = items.map(item => item.id);

  // let relatedItemDetails = relatedItems.map(item => {
  //  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${item}`, {
  //     headers : {
  //       "Authorization": process.env.API_KEY
  //     }
  //   })
  //   .then(e=> console.log('e.data', relatedItemDetails))
  //   .catch(e=> console.log(e));
  // });