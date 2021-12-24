import React from 'react';
import _ from 'underscore';
import Answers from './Answers.jsx';

let Questions = (props) => {
  let questions = props.questions;
  let base = [<div key="q-base">
    <ul>
      {questions.map(q => {
        return <li key={'q-'.concat(q.question_id)}>
          Q: {q.question_body}
          <Answers answers={_.chain(_.values(q.answers))
            .sortBy(answer => {return answer.helpfulness})
            .reverse()
            .slice(0, 2)
          } />
        </li>
      })}
    </ul>
  </div>];

  let totalQs = props.totalQs;
  let more = <button key="more-q" onClick={props.handleQs}>More Answered Questions</button>;
  let less = <button key="less-q" onClick={props.handleQs}>Less Answered Questions</button>;

  if (totalQs <= 2) {
    return base;
  } else if (totalQs > questions.length) {
    return base.concat(more);
  } else {
    return base.concat(less);
  }
}

export default Questions;
