import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Overview from './components/Overview/Overview.jsx';
import QA from './components/QA/QA.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import RelatedItems from './components/RelatedProducts/Related-Items.jsx';
import Outfits from './components/RelatedProducts/Outfits.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: Math.floor(Math.random() * (60563 - 59553 + 1)) + 59553
    };
    this.changeProduct = this.changeProduct.bind(this);
  }

  // componentDidMount() {
  // }

  viewRelatedProduct(id) {
    console.log(this);
    this.setState({ item_id: 59556 });
  }

  render() {
    return (
      <div>
        <h1>Atelier</h1>
        <div className="main">
          <div className="overview">
            {/* <Overview itemid={this.state.item_id} /> */}
          </div>
          {/* <QA itemid={this.state.item_id} /> */}
          <div className="ratings">
            {/* <Ratings itemid={this.state.item_id} /> */}
          </div>
        </div>
        <div>
          <RelatedItems
            itemId={this.state.item_id}
            changeItem={this.viewRelatedProduct} />
        </div>
        <div>
          {/* <Outfits itemId={this.state.item_id} /> */}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
