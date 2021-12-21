import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Overview from './components/Overview/Overview.jsx';
import QA from './components/QA/QA.jsx';
<<<<<<< HEAD
import Ratings from './components/Ratings.jsx';
import RelatedItems from './components/RelatedProducts/Related-Items.jsx';
=======
import Ratings from './components/Ratings/Ratings.jsx';
>>>>>>> d2127f2cc0521c4a647192384302a60c11621c89

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
<<<<<<< HEAD
          {/* <QA itemid={this.state.item_id} /> */}
=======
          <QA itemid={this.state.item_id} />
          <div className="ratings">
>>>>>>> d2127f2cc0521c4a647192384302a60c11621c89
          <Ratings itemid={this.state.item_id} />
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
