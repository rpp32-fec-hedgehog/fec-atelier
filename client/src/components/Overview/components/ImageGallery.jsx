import React from 'react';
import Modal from 'react-modal';
import _ from 'underscore';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import ExpandedView from './Modal.jsx';

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
      <div className="Image-Gallery" data-testid="image-gallery" style={{border: "1px solid black"}}>
        <h4>Image Gallery</h4>
        <div onClick={this.openModal}>
          <img className="main-gallery" src={this.props.photo}></img>
        </div>
        <button className='backward' onClick={this.props.backward}>backward</button>
        <button className='forward' onClick={this.props.forward}>forward</button>
        <Modal isOpen={this.state.modalOpen}>
          <button onClick={this.closeModal}>X</button>
          <img className="modal-image" src={this.props.photo}></img>
        </Modal>
      </div>

      /* <div className="image-gallery">
         <Carousel dynamicHeight="true">
           {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(this.props.styleData[this.props.selectedStyle].photos, (photo, index) => {
            return (
              <div key={index} onClick={this.openModal}>
                <img className="image-gallery-thumbnail" src={photo.url}></img>
              </div>
            )
          }) : null}
        </Carousel>
        <Modal isOpen={this.state.modalOpen}>
          <button onClick={this.closeModal}>X</button>
          <Carousel dynamicHeight="true" >
            {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(this.props.styleData[this.props.selectedStyle].photos, (photo, index) => {
              return (
                <div key={index} onClick={this.openModal}>
                  <img className="image-gallery-thumbnail" src={photo.url}></img>
                </div>
              )
            }) : null}
          </Carousel>
        </Modal>
      </div> */
    )
  }
}


export default ImageGallery;
