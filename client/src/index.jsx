import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import QA from './components/QA/QA.jsx';
import Ratings from './components/Ratings.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: 59553
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Atelier</h1>
        <div className="overview">
          <Overview itemid={this.state.item_id} />
        </div>
        <div className="main">
          <QA itemid={this.state.item_id} />
          <Ratings itemid={this.state.item_id} />
        </div>
        <div className="relatedProducts">
          <RelatedProducts />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
