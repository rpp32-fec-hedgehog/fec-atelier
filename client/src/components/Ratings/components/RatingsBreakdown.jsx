import React from 'react';
import StarRating from './StarRating.jsx';

const RatingsMeta = (props) => {

  console.log('ratings metadata: ', props.ratings_meta);

  const ratings = props.ratings_meta.ratings;
  const recommended = props.ratings_meta.recommended;

  let ratings_total = 0;
  let divisor = 0;
  let recommend_total = 0;
  let count = 0;
  let didRecommend = 0;
  let percentRecommending = 0;

  for (const key in ratings) {
    ratings_total += key * ratings[key];
    divisor += parseInt(ratings[key]);
  }

  const ratings_average = (Math.ceil( ratings_total / divisor * 10 ) / 10).toFixed(1);

  for (const key in recommended) {
    recommend_total += parseInt(recommended[key]);
    if (count === 1) {
      didRecommend = parseInt(recommended[key]);
    }
    count = 1;
  }


  percentRecommending = (didRecommend / recommend_total * 100).toFixed(0);
  console.log('recommending: ', didRecommend, recommend_total);

  return(
    <div data-testid="ratings-breakdown" className="ratings_breakdown">
      <h1 className="ratings_average">{ratings_average}</h1><span className="ratings_breakdown_stars">  <StarRating star_rating={ratings_average}></StarRating></span>
      <br></br><br></br><br></br> <span className="percent_recommending">{percentRecommending}% of reviews recommend this product.</span>
    </div>
  )

}

export default RatingsMeta;
