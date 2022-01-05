import React from 'react';

class AskQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: ''
    };
  }

  render() {
    return (
      <div className="question-modal">
        <button className="ask-question-btn">Add A Question</button>
      </div>
    )
  }
}

export default AskQuestion;
