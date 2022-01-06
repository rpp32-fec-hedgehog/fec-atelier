import React from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';


const IndividualReview = (props) => {

    const date = props.date;
    const star_rating = props.star_rating;
    const summary = props.summary;
    const body = props.body;
    const reviewer_name = props.reviewer_name;
    const recommend = props.recommend;
    const response = props.response;

    const reviewStyle = {
      border: '1px solid rgba(0, 0, 0, 1)',
      margin: '5px'
    };

    return (
      <div data-testid="individual-review" className="individual_review">
        <li style={reviewStyle}>
        <span><StarRating star_rating={star_rating}></StarRating> {reviewer_name}, {moment(date).format('LL')} <br></br> <b>{summary}</b> <br></br> {body}
        <br></br>...should include pictures
        <br></br> {response}
        <br></br> {recommend ? <img src={'images/transparent-background-check-mark.png'} alt='loading' width="10" height="10"/>: null}{recommend ? " I recommend this product.": null}</span>
        </li>
    </div>
    )

}

export default IndividualReview;
