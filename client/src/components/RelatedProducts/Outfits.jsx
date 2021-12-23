import React from 'react';
import $ from 'jquery';
import ProductCard from './Product-Card.jsx';
import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from  './Product-Card.jsx';

class Outfits extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outfitItems: []
    };
  }

  render() {
    if (!this.state.outfitItems.length) {
      return <div>There are no items in your Outfitterer yet</div>
    }
    return (
    <Carousel>
      <Product-Card>Testing</Product-Card>
    </Carousel>
    )
  }
}

export default Outfits;
