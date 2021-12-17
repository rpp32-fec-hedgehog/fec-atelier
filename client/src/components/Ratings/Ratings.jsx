import React from 'react';
import { getReviewsByItem, getReviewsMetaByItem } from '../../../.././utils/apiCalls.js';
import RatingsList from './components/RatingsList.jsx';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: '',
      ratings: [{review_id: 1, summary: 'summary1'}, {review_id: 2, summary: 'summary2'}] //very fake data here
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount(props){
    console.log('props id in Ratings: ', this.props.itemid);

    this.getAllReviews(this.props.itemid, (error, result) => {
      //retrive reviews. Do sorting here, if possible (or in RatingsList?).
      if (error) {
        console.log('client reports retrieve reviews error: ', error);
      } else {
        console.log('client reports retrieve reviews success: ', result);
      }
    })
  }

  getAllReviews(item_id, callback) {
    //open to making this call elsewhere and importing. Just trying to get data flowing.
    axios.get('/ratings')
      .then((response) => {
        console.log('ratings list in client from axios: ', response.data);
        //this.setState({ratings: response.data})
        //callback(null, response.data);
      })
      .catch((error) => {
        callback(error);
      })
  }

  render(props) {

    return (
      <div>
        <h1>Ratings</h1>
        <RatingsList ratings={this.state.ratings}></RatingsList>
      </div>
    );
  }
}

export default Ratings;