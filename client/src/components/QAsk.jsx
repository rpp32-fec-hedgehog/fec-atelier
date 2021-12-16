import React from 'react';
import ReactDOM from 'react-dom';

class QAsk extends React.Component {
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
      <div>
        put your question here
      </div>
    )
  }
}

export default QAsk;
