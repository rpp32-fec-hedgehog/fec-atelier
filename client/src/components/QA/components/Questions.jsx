import React from 'react';
import _ from 'underscore';
import Answers from './Answers.jsx';

let Questions = (props) => {
  return <ul>
    {props.questions.map(q => {
      return <li key={'q-'.concat(q.question_id)}>
        {q.question_body}
        <Answers answers={_.values(q.answers).slice(0, 2)} />
      </li>
    })}
  </ul>;
}

export default Questions;
