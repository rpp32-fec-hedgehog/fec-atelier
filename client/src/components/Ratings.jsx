import React from 'react';
import { getReviewsByItem, getReviewsMetaByItem } from '../../.././utils/apiCalls.js';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_no: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render(props) {

    return (
      <div>
        <h1>Ratings</h1>
      </div>
    );
  }
}



export default Ratings;