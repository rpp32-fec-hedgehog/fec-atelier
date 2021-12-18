import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import Ratings from './components/Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: ''
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
          <Ratings itemid={this.state.item_id} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
