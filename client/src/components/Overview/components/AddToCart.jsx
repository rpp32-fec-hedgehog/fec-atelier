import React from 'react';


class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: ''
    };
  }

  render() {
    return (
      <div className="add-to-cart-info">Add To Cart Area</div>
    )
  }
}

export default AddToCart;
