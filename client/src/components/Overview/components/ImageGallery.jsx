import React from 'react';


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productImageStuff: ''
    };
  }

  render() {
    return (
      <div className="Image-Gallery" data-testid="image-gallery">Image Gallery</div>
    )
  }
}

export default ImageGallery;
