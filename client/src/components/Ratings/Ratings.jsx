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
      filter1: false,
      filter2: false,
      filter3: false,
      filter4: false,
      filter5: false
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

    let flipFilterState;
    console.log('val: ', val);
    val = val.slice(0, 1);

    if (val === 1) {
      flipFilterState = !this.state.filter1;
      this.setState({filter1: flipFilterState})
    } else if (val === 2) {
      flipFilterState = !this.state.filter2;
      this.setState({filter2: flipFilterState})
    } else if (val === 3) {
      flipFilterState = !this.state.filter3;
      this.setState({filter3: flipFilterState})
    } else if (val === 4) {
      flipFilterState = !this.state.filter4;
      this.setState({filter4: flipFilterState})
    } else if (val === 5) {
      flipFilterState = !this.state.filter5;
      this.setState({filter5: flipFilterState})
    }
    console.log('state: ', this.state);
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
        <br></br><RatingsMeta className="ratings_meta" ratings_meta={this.state.ratings_meta} flip_filters={this.flip_filters}></RatingsMeta><RatingsList className="ratings_list" ratings_meta={this.state.ratings_meta}
        count={this.state.count} item_name={this.state.item_name} chooseHelpful={this.chooseHelpful} putMarkHelpful={this.putMarkHelpful} getAllReviews={this.getAllReviews.bind(this)}></RatingsList>
      </div>
    );
  }
}

export default Ratings;
