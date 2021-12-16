import React from 'react';
import ReactDOM from 'react-dom';

class QAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: ''
    };
  }

  render() {
    return (
      <div>
        put your answers here
      </div>
    )
  }
}

export default QAnswer;
