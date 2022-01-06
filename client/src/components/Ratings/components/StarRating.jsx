import React from 'react';

const StarRating = (props) => {

  const roundedRating = (Math.round(props.star_rating * 4) / 4).toFixed(2);
  const ratingWidth = roundedRating * 15;

  console.log('star rating: ', roundedRating)

  return (
    <span>
      <div className="rating"style={{width: ratingWidth}}></div>
    </span>
  );

}

export default StarRating;
