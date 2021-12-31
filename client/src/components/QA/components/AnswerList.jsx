import React from 'react';
import _ from 'underscore';
import Answers from './Answers.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  sortAnswers(question) {
    return _.chain(_.values(question))
      .sortBy(answer => { return answer.helpfulness })
      .reverse()
      .partition(user => {
        if (user.answerer_name === 'Seller') {
          return true;
        }
      })
      .flatten()
      .value()

  }

  render() {
    return (
      <Answers answers={this.sortAnswers(this.props.answers)} />
    )
  }
}

// let totalAnswers = q.answers.length;
// let answers = this.sortAnswers(q);
// console.log('WOAH ', totalAnswers, answers)
// if (this.state.expanded === false) {
//   answers = answers.slice(0, 2);
// }

// let moreAnswers = <button key="more-answers" >See More Answers</button>;
// console.log('WOAH2 ', totalAnswers, answers)
// if (totalAnswers > 2) {
//   return aBase.concat(moreAnswers);
// } else {
//   return aBase;
// }

export default AnswerList;
