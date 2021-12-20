import React from 'react';
import $ from 'jquery';
import ProductCard from './Product-Card.jsx';

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
        console.log('Related Item data: ', data);
      }
    })
  }

  render() {
    return (<ProductCard relatedItems={this.state.relatedItems}/>)
  }
}

export default RelatedItems;