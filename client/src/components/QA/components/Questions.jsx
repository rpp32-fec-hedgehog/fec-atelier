import React from 'react';
import _ from 'underscore';
import Answers from './Answers.jsx';

let Questions = (props) => {
  return <ul>
    {props.questions.map(q => {
      return <li key={'q-'.concat(q.question_id)}>
        Q: {q.question_body}
        <Answers answers={_.chain(_.values(q.answers))
          .sortBy((answer) => {return answer.helpfulness})
          .reverse()
          .slice(0, 2)
        } />
      </li>
    })}
  </ul>;
}

export default Questions;
