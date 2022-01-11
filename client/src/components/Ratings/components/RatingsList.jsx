import React from 'react';
import IndividualReview from './IndividualReview.jsx';

class RatingsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: 0,
      sort: 'relevant',
      ratings: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      sort: e.target.value,
      item_id: this.props.ratings_meta.product_id}, () => {
        console.log('ratings list item id? ', this.state.item_id);
        this.props.getAllReviews(this.state.item_id, this.state.sort, (error, result) => {
          if (error) {
            console.log('ratings list reports retrieve reviews error: ', error);
          } else {
            this.setState({ratings: result});
          }
        })
      })
  }

  componentDidMount(props){
    this.setState({item_id: this.props.ratings_meta.product_id}, () => {
      this.props.getAllReviews(this.state.item_id, this.state.sort, (error, result) => {
        if (error) {
          console.log('client reports retrieve reviews error: ', error);
        } else {
          this.setState({ratings: result});
        }
        }
      )
    })
  }

  render(props) {

    let recommend_total = 0;

    if (this.props.ratings_meta) {
      const recommended = this.props.ratings_meta.recommended;

      for (const key in recommended) {
      recommend_total += parseInt(recommended[key]);
      }
    }

    let ratings = this.state.ratings.map((rating) => {
      return (
          <IndividualReview key={rating.review_id} star_rating={rating.rating} summary={rating.summary} date={rating.date} body={rating.body} recommend={rating.recommend} reviewer_name={rating.reviewer_name} response={rating.response} helpfulness={rating.helpfulness} photos={rating.photos}></IndividualReview>
      )
    });

    return(
      <div data-testid="ratings-list">
        <div className="review_sort_bar">
          <form onChange={this.handleChange}>
            <b>{recommend_total} <span>reviews, sorted by </span></b>
            <select value={this.state.sort} onChange={this.handleChange}>
              <option value="relevant">Relevant</option>
              <option value="newest">Newest</option>
              <option value="helpful">Helpful</option>
            </select>
          </form>
            <br></br>
        </div>
          <ul className="ratings_list">{ratings}</ul>
      </div>
    )
  }
}

export default RatingsList;
