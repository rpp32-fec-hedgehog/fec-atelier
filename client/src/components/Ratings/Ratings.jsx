import React from 'react';
import { getReviewsByItem, getReviewsMetaByItem } from '../../../.././utils/apiCalls.js';
import RatingsList from './components/RatingsList.jsx';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: 59557,
      ratings: [{review_id: 1, summary: 'summary1'}, {review_id: 2, summary: 'summary2'}]
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount(props){
    this.getAllReviews(this.props.itemid, (error, result) => {
      if (error) {
        console.log('client reports retrieve reviews error: ', error);
      } else {
        this.setState({ratings: result});
      }
    })
  }

  getAllReviews(item_id, callback) {
    axios.get('/ratings', {
      headers : {
        "item_id" : item_id
      }
    })
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        console.log('ratings list failure in client from axios: ', error);
        callback(error);
      })
  }

  render(props) {

    return (
      <div data-testid="ratings" className="ratings-widget">
        <h1>Ratings & Reviews</h1>
        <RatingsList ratings={this.state.ratings}></RatingsList>
      </div>
    );
  }
}

export default Ratings;