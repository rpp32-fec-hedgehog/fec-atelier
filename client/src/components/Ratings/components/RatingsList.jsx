import React from 'react';
import IndividualReview from './IndividualReview.jsx';

const RatingsList = (props) => {

  let ratings = props.ratings.map((rating) => {
    return (
      <IndividualReview key={rating.review_id} summary={rating.summary} date={rating.date} body={rating.body} recommend={rating.recommend} reviewer_name={rating.reviewer_name} response={rating.response} helpfulness={rating.helpfulness}></IndividualReview>
    )
  });

  return(
    <div className="ratings">
      <ul>{ratings}</ul>
    </div>
  )

}

export default RatingsList;