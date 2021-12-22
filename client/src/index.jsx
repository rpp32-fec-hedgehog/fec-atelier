import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Overview from './components/Overview/Overview.jsx';
import QA from './components/QA/QA.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import RelatedItems from './components/RelatedProducts/Related-Items.jsx';

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
          {/* <Overview itemid={this.state.item_id} /> */}
        </div>
        <div className="main">
          {/* <QA itemid={this.state.item_id} /> */}
          <div className="ratings">
          {/* <Ratings itemid={this.state.item_id} /> */}
          </div>
        </div>
        <div>
          <RelatedItems itemId={this.state.item_id}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
