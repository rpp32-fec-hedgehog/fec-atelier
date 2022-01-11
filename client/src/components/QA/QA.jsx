import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

import SearchQuestion from './components/SearchQuestion.jsx';
import Questions from './components/Questions.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalQuestions: [],
      questions: [],
      page: 1
    };
  }

  searchQuestions(e) {
    e.preventDefault();
    let text = e.target.value;
    if (text.length >= 3) {
      this.setState({
        questions: this.sortByTerm(this.state.originalQuestions, text)
      })
    } else {
      this.setState({questions: this.state.originalQuestions});
    }
  }

  sortByTerm(questions, sortTerm) {
    return _.filter(questions, q => {
      if (q.question_body.includes(sortTerm)) {
        return true;
      }
    })
  }

  getQAData() {
    $.ajax({
      url: `/qa/questions/${this.props.itemid}/${this.state.page}`,
      method: 'GET',
      success: data => {
        let newQuestions = _.flatten(this.state.originalQuestions.slice().concat(data.results));
        let newPage = this.state.page + 1;
        this.setState({
          questions: newQuestions,
          originalQuestions: newQuestions,
          page: newPage
        })
      }
    })
  }

  updateQuestionHelp(question_id) {
    let updatedQuestions = _.map(this.state.originalQuestions, q => {
      if (q.question_id === question_id) {
        q.question_helpfulness ++;
        return q;
      } else {
        return q;
      }
    })

    this.setState({
      originalQuestions: updatedQuestions,
      questions: updatedQuestions
    })
  }

  updateAnswerHelp(answer_id, question_id) {
    let updatedAnswers = _.map(this.state.originalQuestions, q => {
      if (q.question_id === question_id) {
        q.answers = _.each(q.answers, a => {
          if (a.id === answer_id) {
            a.helpfulness ++;
          }
        })

        return q;
      } else {
        return q;
      }
    })

    this.setState({
      originalQuestions: updatedAnswers,
      questions: updatedAnswers
    })
  }

  componentDidMount() {
    this.getQAData();
  }

  render() {
    let state = this.state;
    return (
      <div data-testid="qa" id="qa">
        <span className="qa-title">{'QUESTIONS & ANSWERS'}</span>
        <SearchQuestion searchQuestions={this.searchQuestions.bind(this)}/>
        <Questions questions={state.questions} updateQHelp={this.updateQuestionHelp.bind(this)}
          updateAHelp={this.updateAnswerHelp.bind(this)}
          getQAData={this.getQAData.bind(this)}
          product_id={this.props.itemid} />
      </div>
    )
  }
}

export default QA;
