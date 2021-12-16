import React from 'react';

import { getProductDataByItem } from '../../.././utils/apiCalls.js';

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overviewStuff: ''
    }
  }



  render() {
    return (
      <div>Overview Widget Here</div>
    )
  }
}

export default Overview;

