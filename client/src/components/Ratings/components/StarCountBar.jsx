import React from 'react';

const StarCount = (props) => {

  let star_count = props.star_count;
  const star_number = props.star_number;

  if (isNaN(star_count)) {
    return (
      <li>
        <br></br>{star_number} stars <span className="star_bar"></span>
      </li>
    );
  } else {
    return (
      <li>
        <br></br>{star_number} stars <span className="star_bar" style={{width: parseInt(star_count)}}></span>
      </li>
    );
  }

}

export default StarCount;
