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
      <div key="ask-q" data-testid="ask-question">
        put your question here
      </div>
    )
  }
}

export default AskQuestion;
