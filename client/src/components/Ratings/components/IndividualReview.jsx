import React from 'react';
import moment from 'moment';

const IndividualReview = (props) => {

    const date = props.date;
    const summary = props.summary;
    const body = props.body;
    const reviewer_name = props.reviewer_name;
    const recommend = props.recommend;
    const response = props.response;

    const reviewStyle = {
      border: '1px solid rgba(0, 0, 0, 1)',
      width: '45%',
      float: 'left',
      margin: '5px'
    };

    return (
      <li style={reviewStyle}>
      <span> star rating goes here {moment(date).format('LL')} <br></br> <b>{summary}</b> <br></br> {body} <br></br>...should include pictures<br></br> {reviewer_name} <br></br> {response} <br></br> {recommend ? "I recommend this product": null}</span>
    </li>
    )

}

export default IndividualReview;
