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
      questionCount: 2,
      questionTracker: 1,
      votes: []
    };
  }

  handleQuestions(e) {
    e.preventDefault();
    let tracker;
    if (this.state.questionTracker === 1) {
      tracker = 2;
    } else if (this.state.questionTracker === 2) {
      tracker = 1;
    }

    if (tracker === 2) {
      this.props.getQAData();
    }

    if (this.props.questions.length > this.state.questionCount) {
      this.setState({
        questionCount: this.state.questionCount += 2,
        questionTracker: tracker
      })
    } else {
      this.setState({
        questionCount: this.state.questionCount -= 2
      })
    }
  }

  questionIsHelpful(e) {
    e.preventDefault();
    let questionClasses = e.target.className;
    let secondClass = questionClasses.split(' ')[1];
    let subClasses = secondClass.split('-');
    let question_id = Number(subClasses[2]);
    let questionHelpCount = subClasses[3];

    if (!this.state.votes.includes(question_id)) {
      $.ajax({
        url: `/qa/questions/${question_id}/helpful`,
        method: 'PUT',
        success: () => {
          this.setState({votes: this.state.votes.push(question_id)})
          this.props.updateQHelp(question_id);
        },
        error: err => {
          alert(err);
        }
      })
    }
  }

  render() {
    let base = [<div data-testid="questions" key="q-base">
      <ul>
        {_.map(this.props.questions.slice(0, this.state.questionCount), q => {
          return <div className="question" data-testid={q.question_body}
            key={`${q.question_body}-${q.question_id}`}
          >
            <li key={`q-${q.question_id}`}>
              <div className="q-header">
                <span className="q-body">Q: {q.question_body}</span>
                <div className="q-bar">
                  <span className="q-helpful">Helpful?</span>
                  <span className={`q-help-count q-help-${q.question_id}-${q.question_helpfulness}`}
                    onClick={this.questionIsHelpful.bind(this)}>
                    <u>Yes</u>&nbsp;{`(${q.question_helpfulness})`}
                  </span>
                  <span className="vertical-bar">|</span>
                  <AnswerQuestion question_id={q.question_id} getQAData={this.props.getQAData}
                    product_id={this.props.product_id}
                    question_body={q.question_body} />
                </div>
              </div>
              <div>
                <span className="a-label"><b>A: </b></span>
                <AnswerList answers={q.answers} question_id={q.question_id}
                  updateAHelp={this.props.updateAHelp} />
              </div>
            </li>
          </div>
        })}
      </ul>
    </div>];

    let totalQs = this.props.questions.length;
    let more = <button key="more-q" className="more-q"
      onClick={this.handleQuestions.bind(this)}>
        MORE ANSWERED QUESTIONS
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
