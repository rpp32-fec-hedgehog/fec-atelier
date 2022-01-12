import React from 'react';
import _ from 'underscore';
import Answers from './Answers.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAnswers: _.values(props.answers).length,
      expanded: false,
      expandButton: <span className="a-more" onClick={this.moreAnswers.bind(this)}
        key={`more-a-${this.props.question_id}`}>
        SEE MORE ANSWERS
      </span>
    };
  }

  moreAnswers(e) {
    e.preventDefault();
    this.setState({
      expanded: true,
      expandButton: <span className="a-more" onClick={this.lessAnswers.bind(this)}
        key={`more-a-${this.props.question_id}`}>
        COLLAPSE ANSWERS
      </span>
    });
  }

  lessAnswers(e) {
    e.preventDefault();
    this.setState({
      expanded: false,
      expandButton: <span className="a-more" onClick={this.moreAnswers.bind(this)}
        key={`more-a-${this.props.question_id}`}>
        SEE MORE ANSWERS
      </span>
    })
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
    let expandState = this.state.expandButton;

    if (this.state.totalAnswers <= 2) {
      expandState = <></>
    }

    return (
      <div>
        {_.map(this.sortAnswers(this.props.answers), (a) => {
          return <div key={`aBase-${a.id}`} data-testid="answer-list" className="answer-list">
            <Answers answer={a} updateAHelp={this.props.updateAHelp} question_id={this.props.question_id} />
          </div>
        })}
        {expandState}
      </div>
    )
  }
}

export default AnswerList;
