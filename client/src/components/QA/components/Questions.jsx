import React from 'react';
import _ from 'underscore';
import $ from 'jquery';
import AnswerList from './AnswerList.jsx';
import AnswerQuestion from './AnswerQuestion.jsx';
import AskQuestion from './AskQuestion.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedQuestions: [],
      totalQuestions: 0,
      questionCount: 2
    };
  }

  handleQuestions(e) {
    e.preventDefault();
    if (this.props.questions.length > this.state.questionCount) {
      this.setState({
        questionCount: this.state.questionCount += 2
      })
    } else {
      this.setState({
        questionCount: this.state.questionCount -= 2
      })
    }
  }

  sortByHelpfulness(questions) {
    let sorted = _.chain(questions)
      .sortBy(question => {return question.question_helpfulness})
      .reverse()
      .slice(0, this.state.questionCount)
      .value()

    return sorted;
  }

  questionIsHelpful(e) {
    e.preventDefault();
    let questionClasses = e.target.className;
    let secondClass = questionClasses.split(' ')[1];
    let subClasses = secondClass.split('-');
    let question_id = Number(subClasses[2]);
    let questionHelpCount = subClasses[3];

    $.ajax({
      url: `/qa/questions/${question_id}/helpful`,
      method: 'PUT',
      success: () => {
        this.props.updateQHelp(question_id);
      },
      error: err => {
        alert(err);
      }
    })
  }

  render() {
    let base = [<div data-testid="questions" key="q-base">
      <ul>
        {this.sortByHelpfulness(this.props.questions).map(q => {
          return <div className="question" data-testid={q.question_body} key={q.question_body}>
            <li key={`q-${q.question_id}`}>
              <span className="q-body">Q: {q.question_body}</span>
              <span className="q-helpful">Helpful?</span>
              <span className={`q-help-count q-help-${q.question_id}-${q.question_helpfulness}`}
                onClick={this.questionIsHelpful.bind(this)}>
                Yes{`(${q.question_helpfulness})`}
              </span>
              <AnswerQuestion question_id={q.question_id} getQAData={this.props.getQAData}
                product_id={this.props.product_id}
                question_body={q.question_body} />
              <AnswerList answers={q.answers} question_id={q.question_id}
                updateAHelp={this.props.updateAHelp} />
            </li>
          </div>
        })}
      </ul>
    </div>];

    let totalQs = this.props.questions.length;
    let more = <button key="more-q" className="more-q"
      onClick={this.handleQuestions.bind(this)}>
        More Answered Questions
      </button>;
    let addQuestion = <AskQuestion key="ask-question" className="ask-question"
      getQAData={this.props.getQAData}
      product_id={this.props.product_id} />
    if (totalQs > this.state.questionCount && totalQs > 2) {
      return base.concat(more, addQuestion);
    } else {
      return base.concat(addQuestion);
    }
  }
}

export default Questions;
