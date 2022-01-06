import React from 'react';
import $ from 'jquery';

const ProductCard = (props) => {
  if (props.type === 'related') {
    return (
      <div className='product_card related_product'>
        <img className="related_product_image" src={props.item.styles[0].photos[0].thumbnail_url} />
        <li key={props.i}>{props.item.category}</li>
        <li key={props.i}>{props.item.name}</li>
        <li key={props.i}>{props.item.default_price}</li>
        <li key={props.i}>{props.item.slogan}</li>
      </div>
    )
  } else {
    return (
    <div className="product_card">
      <div>
        <div>Pending Item Image</div>
        <img placeholder="Images Will Import as outfit items are added"/>
      </div>
      <ul>
        <li key={props.i}>Item Catergory</li>
        <li key={props.i}>Item Name</li>
        <li key={props.i}>Item Price</li>
        <li key={props.i}>Fancy Item Slogan</li>
      </ul>
    </div>
    )
  }
};

export default ProductCard
