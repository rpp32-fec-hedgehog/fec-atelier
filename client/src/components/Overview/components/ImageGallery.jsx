import React from 'react';
import _ from 'underscore';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles : {},
      currentStyleId: '',
      thumbnailList: [],
      imageList: [],
      currentImageIndex: 0
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Image-Gallery" data-testid="image-gallery" style={{border: "1px solid black"}}>
        <h4>Image Gallery</h4>
        <div></div>
      </div>
    )
  }
}

export default ImageGallery;
