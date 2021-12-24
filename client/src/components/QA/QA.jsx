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
      questionCount: 2
    };
  }

  searchHandler(e) {
    e.preventDefault();

    let text = e.target.value;
    if (text.length >= 3) {
      this.setState({
        questions: this.sortQs(this.state.questions, text),
        questionCount: this.state.questionCount
      })
    }
  }

  sortQs(questions, sortTerm) {
    return questions.map(q => {
      if (q.body.includes(sortTerm)) {
        return q;
      }
    })
  }

  handleQs(e) {
    e.preventDefault();

    if (this.state.questions.length > this.state.questionCount) {
      this.setState({
        questions: this.state.questions,
        questionCount: this.state.questionCount += 2
      })
    } else {
      this.setState({
        questions: this.state.questions,
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
