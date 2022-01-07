import React from 'react';
import StarRating from './StarRating.jsx';
import StarCount from './StarCountBar.jsx';

const RatingsMeta = (props) => {

  //console.log('ratings metadata: ', props.ratings_meta);

  const ratings = props.ratings_meta.ratings;
  const recommended = props.ratings_meta.recommended;

  let ratings_total = 0;
  let divisor = 0;
  let recommend_total = 0;
  let count = 0;
  let did_recommend = 0;
  let percent_recommending = 0;
  let stars_count = [0, 0, 0, 0, 0];
  let star_count_list = [];

  for (const key in ratings) {
    ratings_total += key * ratings[key];
    divisor += parseInt(ratings[key]);
    stars_count[key - 1] = ratings[key];
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

  for (let i = 0; i < 5; i++) {
    star_count_list.push({stars: i + 1, star_count: ((stars_count[i] / divisor) * 400).toFixed(0)})
  }

  let star_counts = star_count_list.map((stars_counted) => {
    return (
        <StarCount key={stars_counted.stars} star_number={stars_counted.stars} star_count={stars_counted.star_count}></StarCount>
    )
  });

  return(
    <div data-testid="ratings-breakdown" className="ratings_meta">
      <h1 className="ratings_average">{ratings_average}</h1><span className="ratings_breakdown_stars">  <StarRating star_rating={ratings_average}></StarRating></span>
      <br></br> <span className="percent_recommending">{percent_recommending}% of reviews recommend this product.</span><br></br>
      <ul>{star_counts}</ul>
    </div>
  )
}

export default RatingsMeta;
