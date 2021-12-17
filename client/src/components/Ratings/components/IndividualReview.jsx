import React from 'react';

const IndividualReview = (props) => {
  console.log('individual items in individual review: ', props);
    //const id = props.rating.review_id;
    const summary = props.summary;

    return (
      <li>
      <span>{summary}</span>
    </li>
    )

}

export default IndividualReview;