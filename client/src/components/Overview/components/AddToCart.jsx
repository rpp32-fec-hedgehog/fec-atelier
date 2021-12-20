import React from 'react';
import axios from 'axios';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: 2122777, // purely for testing
      selectedSize: '-',
      selectedQuantity : 8, // again using the default value (this will be updated as sku changes)
      cart: {},
      sizes: ['S','XS','M','L','XL','XXL'],
      quantities: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
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
        <select value={this.state.selectedSize} onChange={this.selectSize}>
          <option value="default">-</option>
          {this.state.sizes.map((size) => {
            return (<option key={size} value={size}>{size}</option>)
          })}
        </select>
      </div>
      <div className="qty-selector"> Select a Quantity
        <select>
          <option value="default">-</option>
          {this.state.quantities.map((number) => {
            while(number <= this.state.selectedQuantity) {
              return (<option key={number} value={number}>{number}</option>)
            }
          })}
        </select>
      </div>
        <button onClick={this.addToCart}>Add To Cart</button>
      </div>
    )
  }
}

export default AddToCart;
