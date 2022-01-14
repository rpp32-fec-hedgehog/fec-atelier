import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

import SearchQuestion from './components/SearchQuestion.jsx';
import Questions from './components/Questions.jsx';
import ClickTracker from './components/ClickTracker.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalQuestions: [],
      questions: [],
      page: 1,
      product_name: ''
    };
  }

  searchQuestions(e) {
    e.preventDefault();
    let text = e.target.value;
    if (text.length >= 3) {
      this.setState({
        questions: this.sortByTerm(this.state.originalQuestions.slice(), text)
      })
    } else {
      this.setState({questions: this.state.originalQuestions});
    }
  }

  revertQuestions(questions) {
    return _.map(questions, q => {
      let questionBody = q.question_body;
      let newQuestion = [];
      if (typeof questionBody !== 'string') {
        _.each(questionBody, qb => {
          if (typeof qb !== 'string') {
            let reverted = qb.props.children;
            newQuestion.push(reverted);
          } else {
            newQuestion.push(qb);
          }
        })
        q.question_body = newQuestion.join('');
        return q;
      } else {
        return q;
      }
    })
  }

  sortByTerm(questions, sortTerm) {
    let filtered = _.filter(this.revertQuestions(questions), q => {
      if (q.question_body.includes(sortTerm)) {
        return true;
      }
    })

    return _.map(filtered, q => {
      let questionBody = q.question_body;
      let newQuestion = [];
      let questionParts = questionBody.split(sortTerm);
      _.each(questionParts, (qp, index) => {
        newQuestion.push(qp);
        if (index !== questionParts.length - 1) {
          newQuestion.push(<mark>{sortTerm}</mark>);
        }
      })

      q.question_body = newQuestion;
      return q;
    })
  }

  // searchQuestions(e) {
  //   e.preventDefault();
  //   let text = e.target.value;
  //   if (text.length >= 3) {
  //     this.setState({
  //       questions: this.sortByTerm(this.state.originalQuestions, text)
  //     })
  //   } else {
  //     this.setState({questions: this.state.originalQuestions});
  //   }
  // }

  // sortByTerm(questions, sortTerm) {
  //   return _.filter(questions, q => {
  //     if (q.question_body.includes(sortTerm)) {
  //       return true;
  //     }
  //   })
  // }

  getQAData() {
    $.ajax({
      url: `/qa/questions/${this.props.itemid}/${this.state.page}`,
      method: 'GET',
      success: data => {
        let newQuestions = _.flatten(this.state.originalQuestions.slice().concat(data.results));
        console.log('HELP ', data.results);
        let newPage = this.state.page + 1;
        this.setState({
          questions: newQuestions,
          originalQuestions: newQuestions,
          page: newPage
        })
      }
    })
  }

  getProductName() {
    $.ajax({
      url: `/products/${this.props.itemid}`,
      method: 'GET',
      success: data => {
        this.setState({
          product_name: data.name
        });
      },
      error: err => {
        alert(err);
      }
    })
  }

  updateQuestionHelp(question_id) {
    let updatedQuestions = _.map(this.state.originalQuestions.slice(), q => {
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
    let updatedAnswers = _.map(this.state.originalQuestions.slice(), q => {
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
    this.getProductName();
  }

  render() {
    let state = this.state;
    return (
      <div data-testid="qa" id="qa">
        <span className="qa-title">{'QUESTIONS & ANSWERS'}</span>
        <ClickTracker render={sendMetrics => {
          return <SearchQuestion searchQuestions={this.searchQuestions.bind(this)} render={sendMetrics}/>
        }} />
        <ClickTracker render={sendMetrics => {
          return <Questions questions={state.questions} updateQHelp={this.updateQuestionHelp.bind(this)}
            updateAHelp={this.updateAnswerHelp.bind(this)}
            getQAData={this.getQAData.bind(this)}
            product_id={this.props.itemid}
            product_name={this.state.product_name}
            render={sendMetrics} />
        }} />

      </div>
    )
  }
}

export default QA;
