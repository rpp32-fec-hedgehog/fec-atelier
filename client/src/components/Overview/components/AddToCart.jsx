import React from 'react';
import axios from 'axios';
import _ from 'underscore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: 2122777,
      selectedSize: undefined,
      selectedQuantity : 0,
      totalQuantity: null,
      myOutfit: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.addToMyOutfit = this.addToMyOutfit.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
    this.getSizes = this.getSizes.bind(this);
    this.mapQuantity = this.mapQuantity.bind(this);
  }

  addToCart() {
    if (this.state.selectedSize === undefined) {
      alert('Please select a size');
      return;
    }
    axios.post('/cart', {
      'sku_id' : this.state.sku
    })
    .then((result) => {
      alert(`x${this.state.selectedQuantity} ${this.props.productName} size ${this.state.selectedSize} added to Cart`);
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
    let entries = Object.entries(this.props.styleData.skus)
    for (let i = 0; i < entries.length; i++) {
      if (entries[i][1].size === e.target.value) {
        this.setState({
          selectedSize: e.target.value,
          sku: entries[i][0],
          totalQuantity: entries[i][1].quantity,
          selectedQuantity: 1
        })
      }
    }
  }

  getSizes() {
    let sizes = [];
    let values = _.values(this.props.styleData.skus)
    for (let i = 0; i < values.length; i++) {
      sizes.push(values[i].size)
    };
    return sizes;
  }

  selectQuantity(e) {
    this.setState({
      selectedQuantity: e.target.value
    })
  }

  mapQuantity() {
    let quantity = []
    for (let i = 1; i <= this.state.totalQuantity; i++) {
      if (i <= 15) {
        if (i <= this.state.totalQuantity) {
          quantity.push(i)
        }
      }
    }
    return quantity;
  }

  render() {
    return (
      <div className="add-to-cart" data-testid="add-to-cart">
        <h4>Add To Cart Area</h4>
        <div className="size-selector"> Select a Size
          <select value={this.state.selectedSize} onChange={this.selectSize}>
            <option value="default">-</option>
            {this.props.styleData !== undefined ? _.map(this.getSizes(), (size, index) => {
              return (<option key={index} value={size}>{size}</option>)
            }) : null
          }
          </select>
        </div>

        <div className="qty-selector"> Select a Quantity
          <select onChange={this.selectQuantity} disabled={!this.state.selectedSize}>
            {!this.state.selectedSize ? <option value="default">-</option> :
              this.state.totalQuantity !== 0 ? _.map(this.mapQuantity(), (number, index) => {
                return (<option key={index} value={number}>{number}</option>)
                  }) : <option value='outOfStock'>Out Of Stock</option>}
          </select>
        </div>

        <button onClick={this.addToCart} >Add To Cart</button>
        <FontAwesomeIcon className="add-to-myoutfit" icon={faStar} onClick={this.addToMyOutfit}></FontAwesomeIcon>
      </div>
    )
  }
}

export default AddToCart;
