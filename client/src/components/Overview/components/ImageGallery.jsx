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

    let currentPhoto = this.props.currentPhoto
    let subtractor = this.props.styleData[this.props.selectedStyle] !== undefined ? this.props.styleData[this.props.selectedStyle].photos.length - 7 : null

    let thumbnailIndex = currentPhoto > subtractor ? currentPhoto - subtractor : 0;

    let range = this.props.styleData[this.props.selectedStyle] !== undefined ?
    this.props.currentPhoto < this.props.styleData[this.props.selectedStyle].photos.length - 7 ?
    this.props.styleData[this.props.selectedStyle].photos.slice(this.props.currentPhoto, this.props.currentPhoto + 7)
    : (this.props.styleData[this.props.selectedStyle].photos.slice(-7)) : null

    return (
      <>
        <div className="image-gallery" data-testid="image-gallery">
          <div className="image-gallery-container">
            <div className="thumbnail-list">
              {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(range, (photo, index) => {
                return thumbnailIndex === index ?
                  (<img className="image-gallery-thumbnail" src={photo.url} key={index} id={index} style={{border: '3px solid #8e9efa'}}></img>) :
                  (<img className="image-gallery-thumbnail" src={photo.url} key={index} id={index} onClick={this.props.changePhoto}></img>)
                }) : null
              }
            </div>
            <img className="main-gallery" src={this.props.photo} onClick={this.openModal}></img>
            {this.props.currentPhoto === 0 ?
            <FontAwesomeIcon className='backward' onClick={this.props.backward} icon={faAngleLeft} size='2x' style={{display: 'none'}}></FontAwesomeIcon> :
            <FontAwesomeIcon className='backward' onClick={this.props.backward} icon={faAngleLeft} size='2x'></FontAwesomeIcon>}
            {this.props.styleData[this.props.selectedStyle] !== undefined && this.props.currentPhoto === this.props.styleData[this.props.selectedStyle].photos.length - 1 ?
              <FontAwesomeIcon className='forward' onClick={this.props.forward} icon={faAngleRight} size='2x' style={{display: 'none'}}></FontAwesomeIcon> :
              <FontAwesomeIcon className='forward' onClick={this.props.forward} icon={faAngleRight} size='2x'></FontAwesomeIcon>
            }
          </div>
        </div>


        <Modal isOpen={this.state.modalOpen} className="modal-gallery">
          <button className="modal-close" onClick={this.closeModal}>X</button>
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
