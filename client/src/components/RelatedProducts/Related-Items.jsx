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
      relatedItems : [
        {
          id: 59553,
          campus: 'hr-rpp',
          name: 'Camo Onesie',
          slogan: 'Blend in to your crowd',
          description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          category: 'Jackets',
          default_price: '140.00',
          created_at: '2021-10-18T22:50:41.839Z',
          updated_at: '2021-10-18T22:50:41.839Z'
        },
        {
          id: 59554,
          campus: 'hr-rpp',
          name: 'Bright Future Sunglasses',
          slogan: "You've got to wear shades",
          description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
          category: 'Accessories',
          default_price: '69.00',
          created_at: '2021-10-18T22:50:41.839Z',
          updated_at: '2021-10-18T22:50:41.839Z'
        },
        {
          id: 59555,
          campus: 'hr-rpp',
          name: 'Morning Joggers',
          slogan: 'Make yourself a morning person',
          description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
          category: 'Pants',
          default_price: '40.00',
          created_at: '2021-10-18T22:50:41.839Z',
          updated_at: '2021-10-18T22:50:41.839Z'
        },
        {
          id: 59556,
          campus: 'hr-rpp',
          name: "Slacker's Slacks",
          slogan: 'Comfortable for everything, or nothing',
          description: "I'll tell you how great they are after I nap for a bit.",
          category: 'Pants',
          default_price: '65.00',
          created_at: '2021-10-18T22:50:41.839Z',
          updated_at: '2021-10-18T22:50:41.839Z'
        },
        {
          id: 59557,
          campus: 'hr-rpp',
          name: 'Heir Force Ones',
          slogan: 'A sneaker dynasty',
          description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
          category: 'Kicks',
          default_price: '99.00',
          created_at: '2021-10-18T22:50:41.839Z',
          updated_at: '2021-10-18T22:50:41.839Z'
        }
      ]

    };
  }

  componentDidMount() {
    $.ajax({
      url: '/relatedItems',
      method: 'GET',
      data: {item_id: this.state.currentItem},
      success: data => {
        console.log('This is coming back to the front end: ', data)
        // this.setState(relatedItems: data)
      }
    })
  }

  render() {
    return (
      <Carousel show={3.5} slide={3} transition={0.5}>
        <ProductCard item={this.state.relatedItems[0]}/>
        <ProductCard item={this.state.relatedItems[1]}/>
        <ProductCard item={this.state.relatedItems[2]}/>
        <ProductCard item={this.state.relatedItems[3]}/>
        <ProductCard item={this.state.relatedItems[4]}/>
      </Carousel>
    )
  }
}

export default RelatedItems;