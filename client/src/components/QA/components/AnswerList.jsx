import React from 'react';
import _ from 'underscore';
import Answers from './Answers.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAnswers: _.values(props.answers).length,
      expanded: false
    };
  }

  handleAnswers(e) {
    e.preventDefault();

    this.setState({expanded: true});
  }

  sortAnswers(answers) {
    let totalA = this.state.totalAnswers;
    if (!this.state.expanded) {
      totalA = 2;
    }

    return _.chain(_.values(answers))
      .sortBy(answer => { return answer.helpfulness })
      .reverse()
      .partition(user => {
        if (user.answerer_name === 'Seller') {
          return true;
        }
      })
      .flatten()
      .slice(0, totalA)
      .value()
  }

  render() {
    let base = _.map(this.sortAnswers(this.props.answers), (a) => {
      return <div key={'aBase-'.concat(a.id)} data-testid="answer-list">
        <Answers answer={a}/>
      </div>
    })

    let moreAnswers = <button onClick={this.handleAnswers.bind(this)}
      key={"more-a-".concat(this.props.questionId)}>
      See More Answers
    </button>;

    if (this.state.totalAnswers > 2 && !this.state.expanded) {
      return base.concat(moreAnswers);
    } else {
      return base;
    }
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
