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
  }

  render() {
    return (
      <div>
        <div className="main">
          <Ratings itemid={this.state.item_id} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));