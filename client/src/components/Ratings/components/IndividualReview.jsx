import React from 'react';

const IndividualReview = (props) => {

    const id = props.rating.review_id;
    const summary = props.rating.summary;

    return (
      <li>
      <span>{summary}</span>
    </li>
    )

}

export default IndividualReview;