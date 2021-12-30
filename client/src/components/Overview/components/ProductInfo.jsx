import React from 'react';
import axios from 'axios';
import _ from 'underscore';
import "regenerator-runtime/runtime.js";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
      reviews: {}
    };
    this.getStarCount = this.getStarCount.bind(this);
    this.grabReviews = this.grabReviews.bind(this);
    this.calculateStarRating = this.calculateStarRating.bind(this);
  }

  async grabReviews() {
    await axios.post(`/reviews/meta`, {
      data : {
        product_id : this.props.itemid
      }
    })
    .then((reviewsData) => {
      this.setState({
        reviews : reviewsData.data.ratings
      });
      return this.getStarCount(reviewsData.data.ratings);
    })
    .then((starsList) => {
      this.setState({
        starCount: starsList
      });
    });
  }

  getStarCount(listOfStars) {
    return _.values(listOfStars);
  }

  calculateStarRating() {
    let totalStars = 0;
    let actual = 0;
    let outOfFiveStars;
    totalStars = (_.reduce(this.state.starCount, (memo, num) => {
      return parseInt(memo) + parseInt(num);
    }, 0)) * 5;

    for (let i = 0; i < this.state.starCount.length; i++) {
      actual += ((i+1) * parseInt(this.state.starCount[i]));
    };

    outOfFiveStars = Math.ceil(((actual/totalStars) * 5) / .25) * .25;
    return outOfFiveStars.toString();
  }

  componentDidMount() {
    this.grabReviews();
    this.grabReviews();
    this.getStarCount(this.state.reviews);
  }

  render() {
    return (
      <div className="product-info" data-testid="product-info" style={{border: "1px solid black"}}>
        <h4>Product Info</h4>
        {this.state.starCount.length ?
          <div className="star-rating" data-testid="star-rating">
            {this.calculateStarRating()} Stars //
            {(_.reduce(this.state.starCount, (memo, num) => {
              return parseInt(memo) + parseInt(num);
                }, 0))} Reviews
          </div>
          : null
        }
        {this.props.productData ? <div>{this.props.productData.category}</div> : null}
        {this.props.productData ? <div>{this.props.productData.default_price}</div> : null}
        {this.props.productData ? <div>{this.props.productData.name}</div> : null}
        {this.props.productData ? <div>{this.props.productData.description}</div> : null}
    </div>
    )
  }
}

export default ProductInfo;
