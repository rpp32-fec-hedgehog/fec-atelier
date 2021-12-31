import React from 'react';
import _ from 'underscore';
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

  handleQs(e) {
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

  render() {
    let base = [<div data-testid="questions" key="q-base">
      <ul>
        {this.sortByHelpfulness(this.props.questions).map(q => {
          return <div data-testid={q.question_body} key={q.question_body}>
            <li key={'q-'.concat(q.question_id)}>
              Q: {q.question_body}
              <AnswerList answers={q.answers} questionId={q.question_id}/>
            </li>
          </div>
        })}

      </ul>
    </div>];

    let totalQs = this.props.questions.length;
    let more = <button key="more-q" onClick={this.handleQs.bind(this)}>More Answered Questions</button>;

    if (totalQs > this.state.questionCount && totalQs > 2) {
      return base.concat(more);
    } else {
      return base;
    }
  }
}

export default Questions;
