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
      return <div key={`aBase-${a.id}`} data-testid="answer-list" className="answer-list">
        <Answers answer={a} updateAHelp={this.props.updateAHelp} question_id={this.props.question_id} />
      </div>
    })

    let moreAnswers = <button onClick={this.handleAnswers.bind(this)}
      key={`more-a-${this.props.question_id}`}>
      See More Answers
    </button>;

    if (this.state.totalAnswers > 2 && !this.state.expanded) {
      return base.concat(moreAnswers);
    } else {
      return base;
    }
  }
}

export default AnswerList;
