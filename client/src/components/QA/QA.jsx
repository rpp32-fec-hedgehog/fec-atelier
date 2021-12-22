import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

import SearchQuestion from './components/SearchQuestion.jsx';
import Questions from './components/Questions.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      searchText: '',
      questionCount: 2
    };
  }

  searchHandler (e) {
    e.preventDefault();

    // update state with search text
    let text = e.target.value;
    this.setState({
      questions: this.state.questions,
      //questions to be changed, should update on text change
      searchText: text,
      questionCount: this.state.questionCount
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/qa/questions/'.concat(this.props.itemid),
      method: 'GET',
      success: (data) => {
        // console.log('Server GET Success ', data);
        this.setState({
          questions: _.chain(data.results)
          .sortBy((question) => {return question.question_helpfulness})
          .reverse()
          ._wrapped,
          searchText: this.state.searchText,
          questionCount: this.state.questionCount
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Questions and Answers</h1>
        <SearchQuestion searchHandler={this.searchHandler.bind(this)}/>
        <Questions questions={this.state.questions.slice(0, 2)} />
      </div>
    )
  }
}

export default QA;
