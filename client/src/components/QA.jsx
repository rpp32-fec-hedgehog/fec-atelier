import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import QASearch from './QASearch.jsx';
import QAView from './QAView.jsx';

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
      url: '/qa/questions/'.concat(this.props.itemid),
      method: 'GET',
      success: (data) => {
        console.log('Server GET Success ', data);
      }
    })
  }

  render() {
    return (
      <div>
        <h4>Questions and Answers</h4>
        <QASearch searchHandler={this.searchHandler.bind(this)}/>
        <QAView questions={this.state.questions} />
      </div>
    )
  }
}

export default QA;
