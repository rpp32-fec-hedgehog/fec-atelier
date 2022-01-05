import React from 'react';
import $ from 'jquery';

const ProductCard = (props) => {
  if (props.type === 'related') {
    return (
      <div className='related'>
        <img className="relatedImage" src={props.item.styles[0].photos[0].thumbnail_url} />
        <li key={props.i}>{props.item.category}</li>
        <li key={props.i}>{props.item.name}</li>
        <li key={props.i}>{props.item.default_price}</li>
        <li key={props.i}>{props.item.slogan}</li>
      </div>
    )
  } else {
    <div>
      <div>
        <img src=""></img>
      </div>
      <ul>
        <li key={props.i}>{props.item.category}</li>
        <li key={props.i}>{props.item.name}</li>
        <li key={props.i}>{props.item.default_price}</li>
        <li key={props.i}>{props.item.slogan}</li>
      </ul>
    </div>
  }
};

export default ProductCard
