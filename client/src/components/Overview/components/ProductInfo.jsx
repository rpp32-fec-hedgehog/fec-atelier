import React from 'react';
import axios from 'axios';
import "regenerator-runtime/runtime.js";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: ''
    };
    this.grabReviews = this.grabReviews.bind(this);
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
      })
    })
  }

  componentDidMount() {
    this.grabReviews()
  }

  render() {
    return (
      <div className="product-info" data-testid="product-info">Product Info</div>
    )
  }
}

export default ProductInfo;
