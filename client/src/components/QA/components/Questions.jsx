import React from 'react';
import _ from 'underscore';
import $ from 'jquery';
import AnswerList from './AnswerList.jsx';

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
      .sortBy((question) => { return question.question_helpfulness })
      .reverse()
      .slice(0, this.state.questionCount)
      .value()

    return sorted;
  }

  questionIsHelpful(e) {
    e.preventDefault();

    let questionClasses = e.target.className;
    let secondClass = questionClasses.split(' ')[1];
    let question_id = secondClass.split('-')[2];

    $.ajax({
      url: '/qa/questions/'.concat(question_id, '/helpful'),
      method: 'PUT',
      success: data => {
        console.log('CLIENT POST ', data);
      }
    })
  }

  render() {
    let base = [<div data-testid="questions" key="q-base">
      <ul>
        {this.sortByHelpfulness(this.props.questions).map(q => {
          return <div data-testid={q.question_body} key={q.question_body}>
            <li key={'q-'.concat(q.question_id)}>
              <span className="q-body">Q: {q.question_body}</span>
              <span className="q-helpful">Helpful?</span>
              <span className={"q-help-count q-help-".concat(q.question_id)}
                onClick={this.questionIsHelpful.bind(this)}>
                Yes{`(${q.question_helpfulness})`}
              </span>
              <AnswerList answers={q.answers} questionId={q.question_id}/>
            </li>
          </div>
        })}

      </ul>
    </div>];

    let totalQs = this.props.questions.length;
    let more = <button key="more-q" onClick={this.handleQuestions.bind(this)}>More Answered Questions</button>;

    if (totalQs > this.state.questionCount && totalQs > 2) {
      return base.concat(more);
    } else {
      return base;
    }
  }
}

export default Questions;
