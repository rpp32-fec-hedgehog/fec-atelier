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
  let did_recommend = 0;
  let percent_recommending = 0;

  for (const key in ratings) {
    ratings_total += key * ratings[key];
    divisor += parseInt(ratings[key]);
  }

  const ratings_average = (Math.ceil( ratings_total / divisor * 10 ) / 10).toFixed(1);

  for (const key in recommended) {
    recommend_total += parseInt(recommended[key]);
    if (count === 1) {
      did_recommend = parseInt(recommended[key]);
    }
    count = 1;
  }

  percent_recommending = (did_recommend / recommend_total * 100).toFixed(0);

  return(
    <div data-testid="ratings-breakdown" className="ratings_meta">
      <h1 className="ratings_average">{ratings_average}</h1><span className="ratings_breakdown_stars">  <StarRating star_rating={ratings_average}></StarRating></span>
      <br></br> <span className="percent_recommending">{percent_recommending}% of reviews recommend this product.</span>
      <br></br><br></br>5 stars<span className="star_bar"></span><br></br>
      <br></br>4 stars<br></br>
      <br></br>3 stars<br></br>
      <br></br>2 stars<br></br>
      <br></br>1 star
    </div>
  )

}

export default RatingsMeta;
