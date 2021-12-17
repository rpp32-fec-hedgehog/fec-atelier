import React from 'react';
import IndividualReview from './IndividualReview.jsx';

const RatingsList = (props) => {

  let ratings = props.ratings.map((rating) => {
    return (
      <IndividualReview key={review_id} summary={summary}></IndividualReview>
    )
  });

  return(
    <div className="ratings">
      <ul>{ratings}</ul>
    </div>
  )

}

export default RatingsList;