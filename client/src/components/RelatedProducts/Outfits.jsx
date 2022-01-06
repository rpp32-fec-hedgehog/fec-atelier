import React from 'react';
import $ from 'jquery';
import ProductCard from './Product-Card.jsx';
import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from  './Product-Card.jsx';

class Outfits extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outfitItems: [{item: 1},{item: 2},{item: 3},{item: 4},{item: 4}]
    };
  }

  render() {
    if (!this.state.outfitItems.length) {
      return <div></div>
    }
    let i=0;
    return (
      <Carousel show={3.5} slide={3} transition={0.5}>
        {this.state.outfitItems.map(item => {
          i++;
          return (<ProductCard item={item} key={i} type={'outfit'}/>)
        })}
      </Carousel>
    )
  }
}

export default Outfits;
