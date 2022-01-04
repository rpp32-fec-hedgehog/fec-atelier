import React from 'react';
import _ from 'underscore';
import $ from 'jquery';
import moment from 'moment';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: false
    };
  }

  answerIsHelpful(e) {
    e.preventDefault();

    let answerClasses = e.target.className;
    let secondClass = answerClasses.split(' ')[1];
    let subClasses = secondClass.split('-');
    let answer_id = Number(subClasses[2]);
    let questionHelpCount = subClasses[3];

    $.ajax({
      url: `/qa/answers/${answer_id}/helpful`,
      method: 'PUT',
      success: () => {
        this.props.updateAHelp(answer_id, this.props.question_id);
      },
      error: err => {
        throw err;
      }
    })
  }

  render() {
    let answer = this.props.answer;
    let answerer = answer.answerer_name;
    if (answerer === 'Seller') {
      answerer = <b>{answerer}</b>
    }

    return (<ul className="answer" data-testid="answers">
      <div key={'a-'.concat(answer.id)} data-testid={answerer}>
        <li className="answer-body">A: {answer.body}</li>
        <span className="answerer">by {answerer}, {moment(answer.date).format('LL')}</span>
        <span className="a-helpful">Helpful?</span>
        <span className={`a-help-count a-help-${answer.id}-${answer.helpfulness}`}
          onClick={this.answerIsHelpful.bind(this)}>
          Yes{`(${answer.helpfulness})`}
        </span>
        <span className="report">Report</span>
      </div>
    </ul>)
  }
}

// let Answers = (props) => {
//   let answer = props.answer;
//   let answerer = answer.answerer_name;
//   if (answerer === 'Seller') {
//     answerer = <b>{answerer}</b>
//   }

//   let answerIsHelpful = (e) => {
//     e.preventDefault();

//     let answerClasses = e.target.className;
//     let secondClass = answerClasses.split(' ')[1];
//     let subClasses = secondClass.split('-');
//     let answer_id = Number(subClasses[2]);
//     let questionHelpCount = subClasses[3];

//     $.ajax({
//       url: `/qa/answers/${answer_id}/helpful`,
//       method: 'PUT',
//       success: () => {
//         props.updateAHelp(answer_id, props.question_id);
//       },
//       error: err => {
//         throw err;
//       }
//     })
//   }

//   return <ul className="answer" data-testid="answers">
//     <div key={'a-'.concat(answer.id)} data-testid={answerer}>
//       <li className="answer-body">A: {answer.body}</li>
//       <span className="answerer">by {answerer}, {moment(answer.date).format('LL')}</span>
//       <span className="a-helpful">Helpful?</span>
//       <span className={`a-help-count a-help-${answer.id}-${answer.helpfulness}`}
//         onClick={answerIsHelpful}>
//         Yes{`(${answer.helpfulness})`}
//       </span>
//       <span className="report">Report</span>
//     </div>
//   </ul>
// }

export default Answers;
