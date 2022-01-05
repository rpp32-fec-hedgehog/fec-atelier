import React from 'react';

const StarRating = (props) => {

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.star_rating) {
      stars.push(<svg key={i} className="solidstar" height="15" width="15"> <polygon points="6.5, 0, 9, 5, 14, 5.5, 10.5, 9, 12, 14, 6.5, 11.5, 2, 14, 3.5, 9, 0, 5.5, 5, 5, 6.5, 0" fill="black" /></svg>);
    } else {
      stars.push(<svg key={i} className="hollowstar" height="15" width="15"> <polygon points="6.5, 0, 9, 5, 14, 5.5, 10.5, 9, 12, 14, 6.5, 11.5, 2, 14, 3.5, 9, 0, 5.5, 5, 5, 6.5, 0" fill="white" stroke="black" /></svg>);
    }
  }

  // console.log('stars array: ', stars);

  return (
    <span>
     {stars}
   </span>
  );

}

export default StarRating;
