import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import _ from 'underscore';
import "regenerator-runtime/runtime.js";

import ProductInfo from './components/ProductInfo.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ImageGallery from './components/ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData : '',
      styleData : '',
      photo: '',
      selectedStyle: 0,
      currentPhoto: 0,
      numberOfPhotos: 0
    };
    this.grabProductData = this.grabProductData.bind(this);
    this.grabStylesData = this.grabStylesData.bind(this);
    this.cycleForward = this.cycleForward.bind(this);
    this.cycleBackward = this.cycleBackward.bind(this);
  }

  async grabProductData() {
    // $.ajax({
    //   url: `products/${this.props.itemid}`,
    //   method: 'GET',
    //   success: (result) => {
    //     this.setState({
    //       productData : result
    //     });
    //   }
    // })
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
    // $.ajax({
    //   url: `products/${this.props.itemid}/styles`,
    //   method: 'GET',
    //   success: (result) => {
    //     console.log('result inside style data', result)
    //     this.setState({
    //       styleData : result,
    //       photo: result.results[0].photos[0].url,
    //       numberOfPhotos: result.results.map(style => style.photos).length
    //     });
    //   }
    // })
    await axios.get(`products/${this.props.itemid}/styles`)
      .then((result) => {
        this.setState({
          styleData : result.data.results,
          photo: result.data.results[0].photos[0].url,
          numberOfPhotos: result.data.results.map(style => style.photos).length
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  cycleForward(e) {
    let current = this.state.currentPhoto;
    let max = this.state.numberOfPhotos;
    this.state.currentPhoto < max - 1 ?
    this.setState({
      photo: this.state.styleData[this.state.selectedStyle].photos[current + 1].url,
      currentPhoto: this.state.currentPhoto + 1
    }) :
    null
  }

  cycleBackward(e) {
    let current = this.state.currentPhoto;
    let max = this.state.numberOfPhotos;
    this.state.currentPhoto > 0 ?
    this.setState({
      photo: this.state.styleData[this.state.selectedStyle].photos[current - 1].url,
      currentPhoto: this.state.currentPhoto - 1
    }) :
    null
  }

  componentDidMount() {
    this.grabProductData();
    this.grabStylesData();
  }

  render() {
    return (
      <div data-testid='overview-widget' style={{border: "1px solid black"}}>
        <div>
          <h1>Overview</h1>
          <ProductInfo itemid={this.props.itemid} productData={this.state.productData} />
          <ImageGallery styleData={this.state.styleData} photo={this.state.photo}
            forward={this.cycleForward} backward={this.cycleBackward} />
          <StyleSelector styleData={_.map(this.state.styleData, style => style.photos).map(arr => arr[0].thumbnail_url)}/>
          <AddToCart productName={this.state.productData.name} styleData={this.state.styleData} />
        </div>
      </div>
    )
  }
}

export default Overview;
