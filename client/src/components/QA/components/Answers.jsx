import React from 'react';
import _ from 'underscore';

let Answers = (props) => {
  return <ul>
    {_.values(props.answers).slice(0, 3).map((a) => {
      return <li key={a.id}>{a.body}</li>
    })}
  </ul>
}

export default Answers;
