import React, { useState } from 'react';
import _ from 'underscore';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ExpandedView from './Modal.jsx';


const ImageGallery = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <div className="image-gallery">
      <Carousel dynamicHeight="true" >
        {props.styleData[props.selectedStyle] !== undefined ? _.map(props.styleData[props.selectedStyle].photos, (photo, index) => {
          return (
            <div key={index} onClick={openModal}>
              <img className="image-gallery-thumbnail" src={photo.url}></img>
            </div>
          )
        }) : null}
      </Carousel>
      <ExpandedView showModal={showModal} setShowModal={setShowModal}></ExpandedView>
    </div>
  )
}

export default ImageGallery;
