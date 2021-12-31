import React from 'react';
import $ from 'jquery';
import ProductCard from './Product-Card.jsx';
import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from  './Product-Card.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem : 90,
      relatedItems : []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/relatedItems',
      method: 'GET',
      data: {item_id: this.state.currentItem},
      success: data => {
        console.log('This is the data: ', data)
        this.setState({relatedItems: data});
        console.log('What is in state: ', this.state)
      }
    })
  }

  render() {
    if (!this.state.relatedItems.length) {
      return <div className="blankLoad"></div>
    }
    let i=0;
    return (
      <Carousel show={3.5} slide={3} transition={0.5}>
        {this.state.relatedItems.map(item => {
          i++;
          return (<ProductCard item={item} key={i}/>)
        })}
      </Carousel>

    )
  }
}

export default RelatedItems;
