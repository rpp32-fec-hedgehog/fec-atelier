import React from 'react';
import axios from 'axios';

import ProductInfo from './components/ProductInfo.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ImageGallery from './components/ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData : '',
      styleData : ''
    };
    this.grabProductData = this.grabProductData.bind(this);
    this.grabStylesData = this.grabStylesData.bind(this);
  }

  async grabProductData() {
    await axios.get(`products/${this.props.itemid}`)
      .then((result) => {
        this.setState({
          productData : result.data
        });
      })
      .catch((err) => {
        console.error(err.message)
      });
  }

  async grabStylesData() {
    await axios.get(`products/${this.props.itemid}/styles`)
      .then((result) => {
        this.setState({
          styleData : result.data
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  componentDidMount() {
    this.grabProductData();
    this.grabStylesData();
  }

  render() {
    return (
      <div data-testid='overview-widget'>
        <div>
          <h1>Overview Widget Here</h1>
          <ProductInfo itemid={this.props.itemid} productData={this.state.productData}/>
          <StyleSelector styleData={this.state.styleData} />
          <AddToCart productName={this.state.productData.name} styleData={this.state.styleData} />
          <ImageGallery styleData={this.state.styleData}/>
        </div>
      </div>
    )
  }
}

export default Overview;
