import React from 'react';
import StarRating from './StarRating.jsx';

const RatingsMeta = (props) => {

  //console.log('ratings metadata: ', props.ratings_meta);

  const ratings = props.ratings_meta.ratings;
  let ratings_total = 0;
  let divisor = 0;

  for (const key in ratings) {
    ratings_total += key * ratings[key];
    divisor += parseInt(ratings[key]);
  }

  const ratings_average = (Math.ceil( ratings_total / divisor * 10 ) / 10).toFixed(1);

  return(
    <div data-testid="ratings-breakdown" className="ratings_breakdown">
      <h1 className="ratings_average">{ratings_average}</h1><span className="ratings_breakdown_stars">  <StarRating star_rating={ratings_average}></StarRating></span>
    </div>
  )

}

export default RatingsMeta;
