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
      overviewStuff: ''
    };
  }

  componentDidMount() {
    axios.get(`/products/${this.props.itemid}`)
      .then((result) => {
        this.setState({
          productData : result.data
        });
      })
      .catch((err) => {
        console.error(err);
      })

    axios.get(`products/${this.props.itemid}/styles`)
      .then((result) => {
        this.setState({
          styleData : result.data
        });
      })
      .catch((err) => {
        console.error(err);
      })
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
