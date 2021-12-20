import React from 'react';
import axios from 'axios';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku : 2122777, // purely for testing
      size : '-',
      quantity : 1,
      cart: {}
    };
    this.addToCart = this.addToCart.bind(this);
    this.selectSize = this.selectSize.bind(this);
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

  selectSize(e) {
    this.setState({
      size : e.target.value
    })
  }

  render() {
    return (
      <div className="add-to-cart-info">Add To Cart Area
      <div className="size-selector"> Select a Size
        <select value={this.state.value} onChange={this.selectSize}>
          <option value="default">-</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="qty-selector"> Select a Quantity
        <select>
          <option value="default">-</option>
        </select>
      </div>
        <button onClick={this.addToCart}>Add To Cart</button>
      </div>
    )
  }
}

export default AddToCart;
