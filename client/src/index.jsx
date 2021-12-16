import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import axios from 'axios';

import Ratings from './components/Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: ''
    };
  }

  componentDidMount() {
    console.log('something');
  }

  render() {
    return (
      <div>
        <div className="main">
          <QA itemid={this.state.item_id} />
          <Ratings itemid={this.state.item_id} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));