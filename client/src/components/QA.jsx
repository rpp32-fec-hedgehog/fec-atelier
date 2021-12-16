import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import QASearch from './QASearch.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      searchText: ''
    };
  }

  searchHandler (e) {
    e.preventDefault();

    // update state with search text
    let text = e.target.value;
    this.setState({
      questions: this.state.questions,
      //questions to be changed, should update on text change
      searchText: text
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/qa/questions',
      method: 'GET',
      success: (data) => {
        console.log('Server GET Success ', data);
      }
    })
  }

  render() {
    return (
      <div>
        <QASearch searchHandler={this.searchHandler.bind(this)}/>
      </div>
    )
  }
}

export default QA;
