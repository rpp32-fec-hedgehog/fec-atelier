import React from 'react';
import IndividualReview from './IndividualReview.jsx';

const RatingsList = (props) => {
  // console.log('props.ratings: ', props.ratings);

  let ratings = props.ratings.map((rating) => {
    return (
      <IndividualReview key={rating.review_id} summary={rating.summary}></IndividualReview>
    )
  });

  return(
    <div className="ratings">
      <ul>{ratings}</ul>
    </div>
  )

}

export default RatingsList;