import React from 'react';

const ProductCard = (props) => {
  return (
    <div>
      <ul>
        <li>{props.item.category}</li>
        <li>{props.item.name}</li>
        <li>{props.item.default_price}</li>
        <li>{props.item.slogan}</li>
        {/* <li>{props.rating}</li> */}
      </ul>
    </div>
  )
};


export default ProductCard