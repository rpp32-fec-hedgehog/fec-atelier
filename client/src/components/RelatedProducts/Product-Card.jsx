import React from 'react';

const ProductCard = (props) => {
  return (
    <div>
      <ul>
        <li key={props.i}>{props.item.category}</li>
        <li key={props.i}>{props.item.name}</li>
        <li key={props.i}>{props.item.default_price}</li>
        <li key={props.i}>{props.item.slogan}</li>
      </ul>
    </div>
  )
};


export default ProductCard