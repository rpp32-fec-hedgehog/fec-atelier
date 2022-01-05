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

  render() {
    return (
      <div className="question-modal">
        <button className="ask-question-btn">Add A Question</button>
      </div>
    )
  }
}

export default AskQuestion;
