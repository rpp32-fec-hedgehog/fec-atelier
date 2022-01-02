import React from 'react';
import _ from 'underscore';
import moment from 'moment';

let Answers = (props) => {
  let answer = props.answer;
  let answerer = answer.answerer_name;
  if (answerer === 'Seller') {
    answerer = <b>{answerer}</b>
  }

  return <ul className="answer" data-testid="answers">
    <div key={'a-'.concat(answer.id)} data-testid={answerer}>
      <li className="answer-body">A: {answer.body}</li>
      <span className="answerer">by {answerer}, {moment(answer.date).format('LL')}</span>
    </div>
  </ul>
}

export default Answers;
