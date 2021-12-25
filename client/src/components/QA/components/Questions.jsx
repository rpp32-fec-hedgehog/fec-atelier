import React from 'react';
import _ from 'underscore';
import Answers from './Answers.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }
  }

  render() {
    let questions = this.props.questions;
    let base = [<div key="q-base">
      <ul>
        {questions.map(q => {
          return <li key={'q-'.concat(q.question_id)}>
            Q: {q.question_body}
            <Answers answers={_.chain(_.values(q.answers))
              .sortBy(answer => {return answer.helpfulness})
              .reverse()
              .slice(0, 2)
              .value()
            } />
          </li>
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
