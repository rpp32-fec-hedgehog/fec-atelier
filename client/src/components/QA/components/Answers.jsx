import React from 'react';
import _ from 'underscore';
import moment from 'moment';

let Answers = (props) => {
  return <ul data-testid="answers">
    {props.answers.map(a => {
      let answerer = a.answerer_name;
      if (answerer === 'Seller') {
        answerer = <b>{answerer}</b>
      }

      return <div key={'a-'.concat(a.id)}>
        <li>A: {a.body}</li>
          by {answerer}, {moment(a.date).format('LL')}
      </div>
    })}
  </ul>
}

export default Answers;
