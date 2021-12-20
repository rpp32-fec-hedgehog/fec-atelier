import React from 'react';

let Questions = (props) => {
  return <ul>
    {props.questions.slice(0, 3).map((q) => {
      return <li key={q.question_id}>{q.question_body}</li>;
    })}
  </ul>;
}

export default Questions;
