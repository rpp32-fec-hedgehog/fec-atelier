import React from 'react';
import ProductBreakdownItem from './ProductBreakdownItem.jsx'

const ProductBreakdowns = (props) => {

    console.log('product_breakdowns: ', props);

    let product_breakdowns = props.characteristics_list.map((characteristic) => {
      return (
          <ProductBreakdownItem key={characteristic.id} star_number={characteristic.value} star_count={characteristic.inner_characteristic}></ProductBreakdownItem>
      )
    });

    return(
      <div>
        <ul>{product_breakdowns}</ul>
      </div>
    )

}

export default ProductBreakdowns;