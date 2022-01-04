import React from 'react';

const StarRating = (props) => {

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.star_rating) {
      stars.push(<svg key={i} className="solidstar" height="30" width="30"> <polygon points="13, 0, 18, 10, 28, 11, 21, 18, 24, 28, 13, 23, 4, 28, 7, 18, 0, 11, 10, 10, 13, 0" fill="black" /></svg>);
    } else {
      stars.push(<svg key={i} className="hollowstar" height="30" width="30"> <polygon points="13, 0, 18, 10, 28, 11, 21, 18, 24, 28, 13, 23, 4, 28, 7, 18, 0, 11, 10, 10, 13, 0" fill="white" stroke="black" /></svg>);
    }
  }

  console.log('stars array: ', stars);

  return (
    <div>
     {stars}
   </div>
  );

}

export default StarRating;
