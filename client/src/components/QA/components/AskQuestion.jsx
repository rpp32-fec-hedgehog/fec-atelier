import React from 'react';
import Modal from 'react-modal';
import _ from 'underscore';
import $ from 'jquery';

Modal.setAppElement('#app');

class AskQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      product_name: '',
      modalOpen: false
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
    this.setState({modalOpen: false});
  }

  handleQuestion(e) {
    e.preventDefault();
    this.setState({question: e.target.value})
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

  submitQuestion(e) {
    e.preventDefault();
    let questionData = {
      body: this.state.question,
      name: this.state.nickname,
      email: this.state.email,
      product_id: this.props.product_id
    };

    if (this.dataIsValid()) {
      $.ajax({
        url: `/qa/questions`,
        method: 'POST',
        data: questionData,
        success: () => {
          this.closeModal(e);
          this.props.getQAData();
        },
        error: err => {
          alert(err);
        }
      })
    } else {
      alert('invalid field(s)');
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

    return (
      <div className="question-modal">
        <button className="ask-question-btn" onClick={this.openModal.bind(this)}>Ask a Question</button>
        <Modal
          isOpen={this.state.modalOpen}
          style={testStyles}
          contentLabel="Ask Your Question"
        >
          <h2>Ask Your Question</h2>
          <h4>About the {this.state.product_name}</h4>
          <form>
          <label htmlFor="your-question">{'Your Question (mandatory)'}</label>
            <textarea className="qa-modal your-question" maxlength="1000"
              onChange={this.handleQuestion.bind(this)}>
            </textarea>
            <label htmlFor="nickname-q">{'What is your nickname? (mandatory)'}</label>
            <input type="text" className="qa-modal nickname-q" maxLength="60" placeholder="Example: jackson11!"
              onChange={this.handleNickname.bind(this)}>
            </input>
            <div>For privacy reasons, do not use your full name or email address</div>
            <label htmlFor="email-q">{'Your Email (mandatory)'}</label>
            <input type="text" className="qa-modal email-q"
              onChange={this.handleEmail.bind(this)}>
            </input>
          </form>
          <button onClick={this.closeModal.bind(this)}>Close</button>
          <button onClick={this.submitQuestion.bind(this)}>Submit Question</button>
        </Modal>
      </div>
    )
  }
}

export default AskQuestion;
