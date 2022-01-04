import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

class AnswerQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: '',
      modalOpen: false
    };
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render() {
    const testStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };

    return (
      <div className="answer-modal">
        <span className="add-answer" onClick={this.openModal.bind(this)}>Add Answer</span>
        <Modal
          isOpen={this.state.modalOpen}
          style={testStyles}
          contentLabel="Submit Your Answer"
        >
          <h2>Submit Your Answer</h2>
          <h4>PRODUCT NAME:QUESTION BODY HERE</h4>
          <form>
            <label htmlFor="your-answer">{'Your Answer (mandatory)'}</label>
            <input type="text" className="modal your-answer"></input>

            <label htmlFor="nickname-a">{'What is your nickname? (mandatory)'}</label>
            <input type="text" className="modal nickname-a"></input>

          </form>
          <button onClick={this.closeModal.bind(this)}>close</button>
        </Modal>
      </div>
    )
  }
}

export default AnswerQuestion;
