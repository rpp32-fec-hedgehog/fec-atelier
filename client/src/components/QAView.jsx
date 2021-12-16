import React from 'react';

let QAView = (props) => {
  return <ul>
    {props.questions.slice(0, 3).map((q) => {
      return <li>{q}</li>;
    })}
  </ul>;
}

export default QAView;
