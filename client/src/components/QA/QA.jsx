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

  searchHandler(e) {
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

  handleQs(e) {
    e.preventDefault();

    if (this.state.questions.length > this.state.questionCount) {
      this.setState({
        questions: this.state.questions,
        searchText: this.state.searchText,
        questionCount: this.state.questionCount += 2
      })
    } else {
      this.setState({
        questions: this.state.questions,
        searchText: this.state.searchText,
        questionCount: this.state.questionCount -= 2
      })
    }

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
    let state = this.state;
    return (
      <div>
        <h1>Questions and Answers</h1>
        <SearchQuestion searchHandler={this.searchHandler.bind(this)}/>
        <Questions questions={state.questions.slice(0, state.questionCount)}
          handleQs={this.handleQs.bind(this)}
          totalQs={this.state.questions.length}
        />
      </div>
    )
  }
}

export default QA;
