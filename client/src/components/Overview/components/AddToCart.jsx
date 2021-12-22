import React from 'react';
import axios from 'axios';
import _ from 'underscore';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: 2122777, // default value purely for testing
      selectedSize: '-',
      selectedQuantity : 8, // again using the default value (this will be updated as sku changes)
      cart: {},
      myOutfit: [],
      sizes: ['S','XS','M','L','XL','XXL'],
      quantities: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    };
    this.addToCart = this.addToCart.bind(this);
    this.addToMyOutfit = this.addToMyOutfit.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
  }

  addToCart() {
    axios.post('/cart', {
      'sku_id' : this.state.sku // sku will update when size and styles are selected
    })
    .then((result) => {
      alert(`${this.props.productName} added to Cart`);
    })
  }

  addToMyOutfit() {
    let newOutfit = this.state.myOutfit
    _.contains(this.state.myOutfit, this.state.sku) ?
      (newOutfit.splice(newOutfit.indexOf(this.state.sku), 1),
        this.setState({
          myOutfit: newOutfit
        })
      ) :
      this.setState({
        myOutfit: this.state.myOutfit.concat([this.state.sku])
      });
  }

  selectSize(e) {
    this.setState({
      selectedSize: e.target.value
    })
  }

  selectQuantity(e) {
    this.setState({
      selectedQuantity: e.target.value
    })
  }

  render() {
    return (
      <div className="add-to-cart" data-testid="add-to-cart" style={{border: "1px solid black"}}>
        <h4>Add To Cart Area</h4>
        <div className="size-selector"> Select a Size
          <select value={this.state.selectedSize} onChange={this.selectSize}>
            <option value="default">-</option>
            {this.state.sizes.map((size) => {
              return (<option key={size} value={size}>{size}</option>)
            })}
          </select>
        </div>

        <div className="qty-selector"> Select a Quantity
          <select onChange={this.selectQuantity}>
            <option value="default">-</option>
            {this.state.quantities.map((number) => {
              while(number <= this.state.selectedQuantity) {
                return (<option key={number} value={number}>{number}</option>)
              }
            })}
          </select>
        </div>

        <button onClick={this.addToCart}>Add To Cart</button>
        <button onClick={this.addToMyOutfit}>Add To My Outfit</button>
      </div>
    )
  }
}

export default AddToCart;
