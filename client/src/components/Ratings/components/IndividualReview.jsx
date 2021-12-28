import React from 'react';
import moment from 'moment';

const IndividualReview = (props) => {

    const date = props.date;
    const summary = props.summary;
    const body = props.body;
    const reviewer_name = props.reviewer_name;
    const recommend = props.recommend;
    const response = props.response;

    return (
      <li>
      <span> star rating {moment(date).format('LL')} <br></br> <b>{summary}</b> <br></br> {body} <br></br> {reviewer_name} <br></br> {response} <br></br> {recommend}</span>
    </li>
    )

}

export default IndividualReview;
