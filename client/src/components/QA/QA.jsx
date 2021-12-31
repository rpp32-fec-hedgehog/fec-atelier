import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

import SearchQuestion from './components/SearchQuestion.jsx';
import Questions from './components/Questions.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  searchQs(e) {
    e.preventDefault();

    let text = e.target.value;
    if (text.length >= 3) {
      this.setState({
        questions: this.sortByTerm(this.state.questions, text)
      })
    } else {
      this.setState({
        questions: this.state.questions
      })
    }
  }

  sortByTerm(questions, sortTerm) {
    return _.filter(questions, q => {
      if (q.question_body.includes(sortTerm)) {
        return true;
      }
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/qa/questions/'.concat(this.props.itemid),
      method: 'GET',
      success: (data) => {
        this.setState({
          questions: data.results,
        })
      }
    })
  }

  render() {
    let state = this.state;
    return (
      <div data-testid="qa">
        <h1>Questions and Answers</h1>
        <SearchQuestion searchQs={this.searchQs.bind(this)}/>
        <Questions questions={state.questions} />
      </div>
    )
  }
}

export default QA;
