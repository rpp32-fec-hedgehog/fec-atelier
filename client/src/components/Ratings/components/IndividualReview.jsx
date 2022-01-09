import React from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';
import ReviewImages from './ReviewImages.jsx';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body,
      truncatedBody: this.props.body.slice(0, 249),
      truncated: false
    };
  }

  showMore(e) {
    e.preventDefault();
    this.setState({truncated: false});
  }

  componentDidMount() {
    if (this.state.truncatedBody !== this.state.body) {
      this.state.truncated = true;
    }
  }

  render(props) {

    if (this.props) {
      const date = this.props.date;
      const star_rating = this.props.star_rating;
      const summary = this.props.summary;
      const reviewer_name = this.props.reviewer_name;
      const recommend = this.props.recommend;
      const response = this.props.response;
      const body = this.state.body;
      const truncatedBody = this.state.truncatedBody;
      const photos = this.props.photos;

      return (
        <div data-testid="individual-review" className="individual_review">
          <li>
            <div>
              <span className="individual_star_rating"><StarRating star_rating={star_rating}></StarRating></span><span className="user_name_date">{reviewer_name}, {moment(date).format('LL')}</span>
            </div>
          <br></br><b>{summary}</b>
          {this.state.truncated ? <div>{truncatedBody}<br></br><button onClick={this.showMore.bind(this)} >Show More</button></div>: <div>{body}</div>}
          <br></br><ReviewImages photos={photos}></ReviewImages>
          <br></br> {recommend ? <img src={'images/transparent-background-check-mark.png'} alt='loading' width="10" height="10"/>: null}{recommend ? " I recommend this product.": null}
          <br></br><br></br>
          {response ? <div className="review_response">Response from seller:<br></br>{response}</div>: null}
          </li>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default IndividualReview;
