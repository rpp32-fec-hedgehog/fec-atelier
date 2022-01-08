import React from 'react';
import $ from 'jquery';

class ProductCard extends React.Component {
  constructor(props) {
    console.log('How many times?')
    super(props)
    this.state = {
      type: props.type,
      key: props.i,
      item: props.item
    };
    this.newThing = this.newThing.bind(this);
    // this.newProduct = props.updateProduct
  }

  newThing(e) {
    e.preventDefault();
    this.newProduct(this.props.item.id);
  }

  render() {
    if (this.state.type === 'related') {
      return (
        <div
          className='product_card related_product'
          // onClick={this.newThing}
          item={this.state.id}>

          <span>
            <img
              className="related_product_image"
              src={this.state.item.styles[0].photos[0].thumbnail_url}
            />
            <ul>
              <li>{this.state.item.category}</li>
              <li>{this.state.item.name}</li>
              <li>{this.state.item.default_price}</li>
              <li>{this.state.item.slogan}</li>
            </ul>
          </span>

        </div>
      )
    } else {
      return (
      <div className="product_card">
        <div>
          <div>Pending Item Image</div>
          <img placeholder="Images Will Import as outfit items are added"/>
        </div>
        <ul>
          <li key={this.state.i}>Item Catergory</li>
          <li key={this.state.i}>Item Name</li>
          <li key={this.state.i}>Item Price</li>
          <li key={this.state.i}>Fancy Item Slogan</li>
        </ul>
      </div>
      )
    }
  }
};

export default ProductCard;
