import React from 'react';
import axios from 'axios';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku : 2122777,
      size : '',
      quantity : 1,
      cart: {}
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    // post request to cart here
    axios.post('/cart', {
      'sku_id' : this.state.sku // sku will update when size and styles are selected
    })
    .then((result) => {
      alert('added to Cart');
    })
  }

  render() {
    return (
      <div className="add-to-cart-info">Add To Cart Area
        <div>Size Drop down</div>
        <div>Quantity Drop down</div>
        <button onClick={this.addToCart}>Add To Cart</button>
      </div>
    )
  }
}

export default AddToCart;
