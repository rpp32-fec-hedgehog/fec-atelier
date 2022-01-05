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
      <div className="image-gallery">
        <Carousel dynamicHeight="true" >
          {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(this.props.styleData[this.props.selectedStyle].photos, (photo, index) => {
            return (
              <div key={index} onClick={this.openModal.bind(this)}>
                <img className="image-gallery-thumbnail" src={photo.url}></img>
              </div>
            )
          }) : null}
        </Carousel>
        <Modal isOpen={this.state.modalOpen}>
        <Carousel dynamicHeight="true" >
          {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(this.props.styleData[this.props.selectedStyle].photos, (photo, index) => {
            return (
              <div key={index} onClick={this.openModal.bind(this)}>
                <img className="image-gallery-thumbnail" src={photo.url}></img>
              </div>
            )
          }) : null}
        </Carousel>
        </Modal>
      </div>
    )
  }
}


export default ImageGallery;
