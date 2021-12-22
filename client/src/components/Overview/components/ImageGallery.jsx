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
      <div className="Image-Gallery" data-testid="image-gallery" style={{border: "1px solid black"}}>
        <h4>Image Gallery</h4>
      </div>
    )
  }
}

export default ImageGallery;
