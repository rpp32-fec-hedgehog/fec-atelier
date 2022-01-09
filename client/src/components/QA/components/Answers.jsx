import React from 'react';
import _ from 'underscore';
import $ from 'jquery';
import moment from 'moment';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: false,
      votes: []
    };
  }

  answerIsHelpful(e) {
    e.preventDefault();
    let answerClasses = e.target.className;
    let secondClass = answerClasses.split(' ')[1];
    let subClasses = secondClass.split('-');
    let answer_id = Number(subClasses[2]);
    let questionHelpCount = subClasses[3];

    if (!this.state.votes.includes(answer_id)) {
      $.ajax({
        url: `/qa/answers/${answer_id}/helpful`,
        method: 'PUT',
        success: () => {
          this.setState({votes: this.state.votes.push(answer_id)})
          this.props.updateAHelp(answer_id, this.props.question_id);
        },
        error: err => {
          alert(err);
        }
      })
    }
  }

  report(e) {
    e.preventDefault();
    let reportClasses = e.target.className;
    let secondClass = reportClasses.split(' ')[1];
    let answer_id = Number(secondClass.split('-')[1]);

    $.ajax({
      url: `/qa/answers/${answer_id}/report`,
      method: 'PUT',
      success: () => {
        this.setState({reported: true});
      },
      error: err => {
        alert(err);
      }
    })
  }

  render() {
    let answer = this.props.answer;
    let answerer = answer.answerer_name;
    if (answerer === 'Seller') {
      answerer = <b>Seller</b>
    }

    let reportButton = <span className={`report report-${answer.id}`}
      onClick={this.report.bind(this)}>Report
    </span>
    if (this.state.reported) {
      reportButton = <span className="reported">Reported</span>
    }

    return (<ul className="answer" data-testid="answers">
      <div key={`a-${answer.id}`} data-testid={answerer}>
        <li className="answer-body">{answer.body}</li>
        <div>{_.map(answer.photos, photo => {
          return <img className="a-photo" key={photo} src={photo}></img>
        })}</div>
        <span className="answerer">by {answerer}, {moment(answer.date).format('LL')}</span>
        <span className="a-helpful">Helpful?</span>
        <span className={`a-help-count a-help-${answer.id}-${answer.helpfulness}`}
          onClick={this.answerIsHelpful.bind(this)}>
          Yes{`(${answer.helpfulness})`}
        </span>
        {reportButton}
      </div>
    </ul>)
  }
}

export default Answers;
