import React from 'react';
import { getReviewsByItem, getReviewsMetaByItem } from '../../../.././utils/apiCalls.js';
import RatingsList from './components/RatingsList.jsx';
import RatingsMeta from './components/RatingsBreakdown.jsx';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: this.props.itemId,
      ratings: [],
      ratings_meta: {},
      count: 0
    }
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getReviewsMeta = this.getReviewsMeta.bind(this);
  }

  componentDidMount(props){

    this.getReviewsMeta(this.state.item_id, (error, result) => {
      if (error) {
        console.log('client reports retrieve reviews meta error: ', error);
      } else {
        let recommend_total = 0;
        const recommended = result.recommended;

        for (const key in recommended) {
        recommend_total += parseInt(recommended[key]);
        }

        this.setState({
          ratings_meta: result,
          count: recommend_total
        });
      }
    })
  }

  async getAllReviews(item_id, sort, count, callback) {
    await axios.get('/ratings', {
      headers : {
        "item_id" : this.state.item_id,
        "sort" : sort,
        "count" : count
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

  async getReviewsMeta(item_id, callback) {
    await axios.get('/reviews/meta', {
      headers : {
        "item_id" : item_id
      }
    })
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        console.log('ratings meta failure in client from axios: ', error);
        callback(error);
      })
  }

  render() {

    return (
      <div data-testid="ratings" className="ratings-widget">
        <a id="reviews-link"></a>
        <h3>RATINGS & REVIEWS</h3>
        <br></br><RatingsMeta className="ratings_meta" ratings_meta={this.state.ratings_meta}></RatingsMeta><RatingsList className="ratings_list" ratings_meta={this.state.ratings_meta} count={this.state.count} getAllReviews={this.getAllReviews.bind(this)}></RatingsList>
      </div>
    );
  }
}

export default Ratings;
