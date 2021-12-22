import React from 'react';
import _ from 'underscore';
import moment from 'moment';

let Answers = (props) => {
  return <ul>
    {props.answers._wrapped.map(a => {
      return <div key={'a-'.concat(a.id)}>
        <li >A: {a.body}</li>
          by {a.answerer_name}, {moment(a.date).format('LL')}
      </div>
    })}
  </ul>
}

export default Answers;
