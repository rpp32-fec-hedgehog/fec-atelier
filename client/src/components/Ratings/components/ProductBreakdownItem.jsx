import React from 'react';

const ProductBreakdownItem = (props) => {

  const value = props.star_number;
  const characteristic = props.star_count;
  let label1 = '';
  let label2 = '';
  const triangle_location = 340 * (value / 5);

  if (characteristic === 'Comfort') {
    label1 = 'Uncomfortable';
    label2 = 'Perfect'
  } else if (characteristic === 'Fit') {
    label1 = 'Runs tight';
    label2 = 'Runs long'
  } else if (characteristic === 'Length') {
    label1 = 'Runs short';
    label2 = 'Runs long'
  } else if (characteristic === 'Quality') {
    label1 = 'Poor';
    label2 = 'Perfect'
  } else if (characteristic === 'Size') {
    label1 = 'A size too small';
    label2 = 'A size too wide'
  } else if (characteristic === 'Width') {
    label1 = 'Too narrow';
    label2 = 'Too wide'
  }

  return (
    <li className="product_breakdown_list_item">
      <br></br>
      <span className="char_label_main">{characteristic}</span>
      <span className="characteristic"></span><img className="triangle" style={{left: triangle_location}}src={'images/triangle.png'} alt='loading' />
      <span className="left" >{label1}</span><span className="right">{label2}</span><br></br><br></br>
    </li>
  );

}

export default ProductBreakdownItem;
