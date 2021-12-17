import React from 'react';

import ProductInfo from './components/ProductInfo.jsx'
import StyleSelector from './components/StyleSelector.jsx'
import AddToCart from './components/AddToCart.jsx'
import ImageGallery from './components/ImageGallery.jsx'

import { getProductDataByItem } from '../../../../utils/apiCalls.js';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewStuff: ''
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1>Overview Widget Here</h1>
          <ProductInfo product_id={this.props.itemid}/>
          <StyleSelector product_id={this.props.itemid} />
          <AddToCart product_id={this.props.itemid} />
          <ImageGallery product_id={this.props.itemid} />
        </div>
      </div>
    )
  }
}

export default Overview;
