import React from 'react';
import _ from 'underscore';
import AnswerList from './AnswerList.jsx';

let Questions = (props) => {
  let questions = props.questions;
  let base = [<div data-testid="questions" key="q-base">
    <ul>
      {questions.map(q => {
        return <div data-testid={q.question_body} key={q.question_body}>
          <li key={'q-'.concat(q.question_id)}>
            Q: {q.question_body}
            <AnswerList answers={q.answers} />
          </li>
        </div>
      })}

    </ul>
  </div>];

  let totalQs = props.totalQs;
  let more = <button key="more-q" onClick={props.handleQs}>More Answered Questions</button>;

  if (totalQs > questions.length && totalQs > 2) {
    return base.concat(more);
  } else {
    return base;
  }
}

export default Questions;
