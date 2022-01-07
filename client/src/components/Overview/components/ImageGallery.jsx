import React from 'react';
import Modal from 'react-modal';
import _ from 'underscore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({
      modalOpen: true
    });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return (
      <>
        <div className="Image-Gallery" data-testid="image-gallery" style={{border: "1px solid black"}}>
          <h4>Image Gallery</h4>
          <div>
            <div className="thumbnail-list">
              {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(this.props.styleData[this.props.selectedStyle].photos, (photo, index) => {
                  return (
                      <img  className="image-gallery-thumbnail" src={photo.url} key={index} id={index} onClick={this.props.changePhoto}></img>
                  )
                }) : null}
            </div>
            <img className="main-gallery" src={this.props.photo} onClick={this.openModal}></img>
            <FontAwesomeIcon className='backward' onClick={this.props.backward} icon={faAngleLeft} size='2x'></FontAwesomeIcon>
            <FontAwesomeIcon className='forward' onClick={this.props.forward} icon={faAngleRight} size='2x'></FontAwesomeIcon>
          </div>
        </div>


        <Modal isOpen={this.state.modalOpen} className="modal-gallery">
          <button onClick={this.closeModal}>X</button>
          <div className="modal-buttons">
            <FontAwesomeIcon className='modal-back' onClick={this.props.backward} icon={faAngleLeft} size='2x' color="white"></FontAwesomeIcon>
            <FontAwesomeIcon className='modal-forward' onClick={this.props.forward} icon={faAngleRight} size='2x' color="white"></FontAwesomeIcon>
            <img className="modal-image" src={this.props.photo}></img>
          {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(this.props.styleData[this.props.selectedStyle].photos, (photo, index) => {
            return (
              <input className="modal-radio-button" type="radio" key={index} id={index} onClick={this.props.changePhoto}></input>
              )
            }) : null}
          </div>
        </Modal>
      </>
    )
  }
}

export default ImageGallery;
