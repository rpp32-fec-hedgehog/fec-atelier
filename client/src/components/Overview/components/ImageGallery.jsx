import React from 'react';
import _ from 'underscore';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles : {}
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="image-gallery">
        <Carousel dynamicHeight="true">
          {this.props.styleData[this.props.selectedStyle] !== undefined ? _.map(this.props.styleData[this.props.selectedStyle].photos, (photo) => {
            return (<img className="image-gallery-thumbnail" src={photo.url} key={photo.url}></img>)
          }) : null}
        </Carousel>
      </div>
    )
  }
}

export default ImageGallery;
