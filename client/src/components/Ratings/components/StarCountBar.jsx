import React from 'react';

const StarCount = (props) => {

  const star_count = props.star_count;
  const star_number = props.star_number;

  return (
    <li>
      <br></br>{star_number} stars <span className="star_bar" style={{width: parseInt(star_count)}}></span>
    </li>
  );

}

export default StarCount;