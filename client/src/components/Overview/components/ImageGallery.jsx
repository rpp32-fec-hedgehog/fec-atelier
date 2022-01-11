import React from 'react';
import Modal from 'react-modal';
import _ from 'underscore';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      zoom: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.trackPosition = this.trackPosition.bind(this);
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({
      modalOpen: true
    });
  }

  closeModal = (e) => {
    this.setState({
      modalOpen: false
    });
  }

  zoomIn = (e) => {
    e.preventDefault();
    let modalImage = $(".modal-image");
    let frame = $(".zoom-frame");
    if (this.state.zoom === false) {
      modalImage.css('transform', 'scaled(2.5)');
      modalImage.css('cursor', 'zoom-out');
      this.setState((state, props) => ({
        zoom: !state.zoom
      }))
    } else {
      frame.css('background-image', 'none');
      modalImage.css('visibility', 'visible');
      modalImage.css('transform', 'scale(1)');
      modalImage.css('cursor', 'zoom-in');
    }
  }

  zoomOut = (e) => {
    e.preventDefault();
    let modalImage = $(".zoom-frame");
    modalImage.css('display', 'none')
  }

  trackPosition = (e) => {
    console.log('tracking'
    )
    let frame, modalImage, posX, posY;
    this.state.zoom ? (
      <Modal style={{display: 'inline-block'}} />,
      frame = $(".zoom-frame"),
      modalImage = $(".modal-image"),
      modalImage.css('visability', 'hidden'),
      frame.css('background-image', this.props.photo),
      frame.css('background-repeat', 'no-repeat'),
      frame.css('background-size', '900px'),
      posX = e.nativeEvent.offsetX,
      posY = e.nativeEvent.offsetY,
      frame.css('background-position', `${-posX * 2.5}px ${-posY * 2.5}px`)
    ) : null
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
              {this.state.zoom ? (
            <div className="zoom-frame" onMouseMove={this.trackPosition} onClick={this.zoomIn}>
              <button onClick={this.zoomOut}>X</button>
            </div>
         ) : null}
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


        <Modal isOpen={this.state.modalOpen} ariaHideApp={false} className="modal-gallery">

          <button className="modal-close" onClick={this.closeModal}>X</button>
          <div className="modal-buttons">
            <FontAwesomeIcon className='modal-back' onClick={this.props.backward} icon={faAngleLeft} size='2x' color="white"></FontAwesomeIcon>
            <FontAwesomeIcon className='modal-forward' onClick={this.props.forward} icon={faAngleRight} size='2x' color="white"></FontAwesomeIcon>


            {/* conditionally render this based on if the user zooms? */}


            <img className="modal-image" src={this.props.photo} onClick={this.zoomIn}></img>

          {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(range, (photo, index) => {
            return (<input className="modal-radio-button" type="radio" key={index} id={index} onClick={this.props.changePhoto}></input>)
              }) : null
            }
          </div>
        </Modal>
      </>
    )
  }
}

export default ImageGallery;
