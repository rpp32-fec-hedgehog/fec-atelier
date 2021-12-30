import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

import SearchQuestion from './components/SearchQuestion.jsx';
import Questions from './components/Questions.jsx';

import sampleData from '../../../../tests/samples/sampleData';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      sortedQuestions: [],
      questionCount: 2
    };
  }

  searchQs(e) {
    e.preventDefault();

    let text = e.target.value;
    if (text.length >= 3) {
      this.setState({
        sortedQuestions: this.sortQs(this.state.questions, text)
      })
    } else {
      this.setState({
        sortedQuestions: this.state.questions
      })
    }
  }

  sortQs(questions, sortTerm) {
    return _.filter(questions, q => {
      if (q.question_body.includes(sortTerm)) {
        return true;
      }
    })
  }

  handleQs(e) {
    e.preventDefault();

    if (this.state.sortedQuestions.length > this.state.questionCount) {
      this.setState({
        questionCount: this.state.questionCount += 2
      })
    } else {
      this.setState({
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
        let responseData = _.chain(data.results)
        .sortBy((question) => {return question.question_helpfulness})
        .reverse()
        .value()

        this.setState({
          questions: responseData,
          sortedQuestions: responseData
        })
      }
    })
  }

  render() {
    let state = this.state;
    return (
      <div data-testid="qa">
        <h1>Questions and Answers</h1>
        <SearchQuestion searchQs={this.searchQs.bind(this)}/>
        <Questions questions={state.sortedQuestions.slice(0, state.questionCount)}
          handleQs={this.handleQs.bind(this)}
          totalQs={state.sortedQuestions.length}
        />
      </div>
    )
  }
}

export default QA;
