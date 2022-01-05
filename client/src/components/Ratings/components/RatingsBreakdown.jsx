import React from 'react';

const RatingsMeta = (props) => {

  console.log('ratings metadata: ', props);

  // let ratings = props.ratings.map((rating) => {
  //   return (
  //     <IndividualReview key={rating.review_id} star_rating={rating.rating} summary={rating.summary} date={rating.date} body={rating.body} recommend={rating.recommend} reviewer_name={rating.reviewer_name} response={rating.response} helpfulness={rating.helpfulness}></IndividualReview>
  //   )
  // });

  return(
    <div data-testid="ratings-breakdown" className="ratings-breakdown">

    </div>
  )

}

export default RatingsMeta;