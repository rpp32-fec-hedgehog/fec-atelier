import React from 'react';
import Answers from './Answers.jsx';

let QAView = (props) => {
  return <ul>
    {props.questions.slice(0, 3).map((q) => {
      return <li key={q.question_id}>
        {q.question_body}
        <Answers answers={q.answers} />
      </li>
    })}
  </ul>;
}

export default QAView;
