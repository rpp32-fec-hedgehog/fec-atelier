import React from 'react';
import _ from 'underscore';
import Answers from './Answers.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: 2
    }
  }

  sortAnswers(question) {
    return _.chain(_.values(question.answers))
      .sortBy(answer => { return answer.helpfulness })
      .reverse()
      .partition(user => {
        if (user.answerer_name === 'Seller') {
          return true;
        }
      })
      .flatten()
      .slice(0, this.state.expanded)
      .value()
  }

  render() {
    let questions = this.props.questions;
    let base = [<div data-testid="questions" key="q-base">
      <ul>
        {questions.map(q => {
          return <div data-testid={q.question_body} key={q.question_body}>
            <li key={'q-'.concat(q.question_id)}>
              Q: {q.question_body}
              <Answers answers={this.sortAnswers(q)} />
            </li>
          </div>
        })}

      </ul>
    </div>];

    let totalQs = this.props.totalQs;
    let more = <button key="more-q" onClick={this.props.handleQs}>More Answered Questions</button>;

    if (totalQs > questions.length && totalQs > 2) {
      return base.concat(more);
    } else {
      return base;
    }
  }
}

export default Questions;
