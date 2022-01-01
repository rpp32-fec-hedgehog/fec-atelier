import React from 'react';
import _ from 'underscore';
import moment from 'moment';

let Answers = (props) => {
  let answer = props.answer;
  let answerer = answer.answerer_name;
  if (answerer === 'Seller') {
    answerer = <b>{answerer}</b>
  }

  return <ul data-testid="answers">
    <div key={'a-'.concat(answer.id)} data-testid={answerer}>
      <li>A: {answer.body}</li>
      by {answerer}, {moment(answer.date).format('LL')}
    </div>
  </ul>
}

export default Answers;
