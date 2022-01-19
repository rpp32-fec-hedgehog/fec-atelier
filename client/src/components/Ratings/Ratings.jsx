import React from 'react';
import RatingsList from './components/RatingsList.jsx';
import RatingsMeta from './components/RatingsBreakdown.jsx';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: this.props.itemId,
      item_name: '',
      ratings: [],
      ratings_meta: {},
      count: 0,
      filters: [false, false, false, false, false]
    }
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getReviewsMeta = this.getReviewsMeta.bind(this);
    this.chooseHelpful = this.chooseHelpful.bind(this);
    this.putMarkHelpful = this.putMarkHelpful.bind(this);
    this.flipFilters = this.flipFilters.bind(this);
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

    this.getProductData(this.state.item_id, (error, result) => {
      if (error) {
        console.log('client reports retrieve name error: ', error);
      } else {
        this.setState({item_name: result});
      }
    })
  }

  chooseHelpful(review_id) {

    this.putMarkHelpful(review_id, (error, result) => {
      if (error) {
        console.log('error at choose helpful in individual review: ', error);
      }
    })
  }

  flipFilters(val) {

    let flipFilterState = this.state.filters;

    if (val === '1 stars') {
      flipFilterState[0] = !flipFilterState[0];
      this.setState({filters: flipFilterState})
    } else if (val === '2 stars') {
      flipFilterState[1] = !flipFilterState[1];
      this.setState({filters: flipFilterState})
    } else if (val === '3 stars') {
      flipFilterState[2] = !flipFilterState[2];
      this.setState({filters: flipFilterState})
    } else if (val === '4 stars') {
      flipFilterState[3] = !flipFilterState[3];
      this.setState({filters: flipFilterState})
    } else if (val === '5 stars') {
      flipFilterState[4] = !flipFilterState[4];
      this.setState({filters: flipFilterState})
    }
    //console.log('state: ', this.state.filters, this.state.ratings);
  }

  async putMarkHelpful(review_id, callback) {

    await axios.put('/reviews/mark_helpful', {
      data : {
        "review_id" : review_id
      }
    })
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        console.log('error putting helpful from individual review: ', error);
        callback(error);
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
        //let filtered = this.filterData(response.data);
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

  async getProductData(item_id, callback) {
    await axios.get(`products/${item_id}`)
      .then((result) => {
        callback(null, result.data.name);
      })
      .catch((err) => {
        console.error(err.message)
      });
  }

  render() {

    return (
      <div data-testid="ratings" className="ratings-widget">
        <a id="reviews-link"></a>
        <h3>RATINGS & REVIEWS</h3>
        <br></br><RatingsMeta className="ratings_meta" ratings_meta={this.state.ratings_meta} flip_filters={this.flipFilters}></RatingsMeta><RatingsList className="ratings_list" ratings_meta={this.state.ratings_meta} filters={this.state.filters}
        count={this.state.count} item_name={this.state.item_name} chooseHelpful={this.chooseHelpful} putMarkHelpful={this.putMarkHelpful} getAllReviews={this.getAllReviews.bind(this)}></RatingsList>
      </div>
    );
  }
}

export default Ratings;
