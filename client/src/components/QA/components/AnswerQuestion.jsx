import React from 'react';
import Modal from 'react-modal';
import _ from 'underscore';
import $ from 'jquery';
import FILESTACK_API_KEY from '../../../../../env/config.js';

Modal.setAppElement('#app');

class AnswerQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: [],
      product_name: '',
      modalOpen: false,
      invalid: ''
    };
  }

  openModal(e) {
    e.preventDefault();
    $.ajax({
      url: `/products/${this.props.product_id}`,
      method: 'GET',
      success: data => {
        this.setState({
          modalOpen: true,
          product_name: data.name
        });
      },
      error: err => {
        alert(err);
      }
    })
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({modalOpen: false, invalid: ''});
  }

  handleAnswer(e) {
    e.preventDefault();
    this.setState({answer: e.target.value})
  }

  handleNickname(e) {
    e.preventDefault();
    this.setState({nickname: e.target.value})
  }

  handleEmail(e) {
    e.preventDefault();
    this.setState({email: e.target.value})
  }

  dataIsValid() {
    let validation = _.chain(_.values(this.state))
    .slice(0, 3)
    .every((input, index) => {
      if (input.length === 0) {
        return false;
      } else if (index === 2 && !this.emailIsValid()) {
        return false;
      } else {
        return true;
      }
    })
    .value()

    return validation;
  }

  emailIsValid() {
    let splitEmail = this.state.email.split('@');
    if (splitEmail.length === 2) {
      splitEmail[1] = splitEmail[1].split('.');
      let flattenedEmail = _.flatten(splitEmail);
      if (flattenedEmail.length === 3) {
        return true;
      }
    }

    return false;
  }

  addPhotos(e) {
    e.preventDefault();
    const client = filestack.init(process.env.FILESTACK_API_KEY);
    client.picker().open();
    // console.log(FILESTACK_API_KEY);
  }

  submitAnswer(e) {
    e.preventDefault();
    let answerData = {
      body: this.state.answer,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos
    };

    if (this.dataIsValid()) {
      $.ajax({
        url: `/qa/question/${this.props.question_id}/answers`,
        method: 'POST',
        data: answerData,
        success: () => {
          this.closeModal(e);
          this.props.getQAData();
        },
        error: err => {
          alert(err);
        }
      })
    } else {
      this.setState({invalid: 'You must enter the following:'});
    }
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

    // <label for="qa-img">Upload Photos</label>
    // <input type="file" id="qa-img" name="qa-img" accept="image/*"></input>
    // <button onClick={this.addPhotos.bind(this)}>Add Photos</button>

    return (
      <div className="answer-modal">
        <span className="add-answer" onClick={this.openModal.bind(this)}>Add Answer</span>
        <Modal
          isOpen={this.state.modalOpen}
          style={testStyles}
          contentLabel="Submit Your Answer"
        >
          <h2>Submit Your Answer</h2>
          <h4>{this.state.product_name}: {this.props.question_body}</h4>
          <div className="invalid-a">{this.state.invalid}</div>
          <form>
            <label htmlFor="your-answer">{'Your Answer (mandatory)'}</label>
            <textarea className="qa-modal your-answer" maxlength="1000"
              onChange={this.handleAnswer.bind(this)}>
            </textarea>
            <label htmlFor="nickname-a">{'What is your nickname? (mandatory)'}</label>
            <input type="text" className="qa-modal nickname-a" maxlength="60" placeholder='Example: jack543!'
              onChange={this.handleNickname.bind(this)}>
            </input>
            <div className="privacy-msg">For privacy reasons, do not use your full name or email address</div>
            <label htmlFor="email-a">{'Your Email (mandatory)'}</label>
            <input type="text" className="qa-modal email-a" maxlength="60" placeholder='Example: jack@email.com'
              onChange={this.handleEmail.bind(this)}>
            </input>
            <div className="privacy-msg">For authentication reasons, you will not be emailed</div>

            <button onClick={this.addPhotos.bind(this)}>Add Photos</button>

          </form>
          <button onClick={this.closeModal.bind(this)}>Close</button>
          <button onClick={this.submitAnswer.bind(this)}>Submit</button>
        </Modal>
      </div>
    )
  }
}

export default AnswerQuestion;
