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
          contentLabel="TEST MODAL"
        >
          <h2>TEST MODAL</h2>
          <button onClick={this.closeModal.bind(this)}>close</button>
        </Modal>
      </div>
    )
  }
}

export default AnswerQuestion;
