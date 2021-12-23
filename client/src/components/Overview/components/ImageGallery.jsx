import React from 'react';
import _ from 'underscore';

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
      <div className="Image-Gallery" data-testid="image-gallery" style={{border: "1px solid black"}}>
        <h4>Image Gallery</h4>
        <img className="main-gallery" src={this.props.photo}></img>
        <button className='backward' onClick={this.props.backward}>backward</button>
        <button className='forward' onClick={this.props.forward}>forward</button>
      </div>
    )
  }
}

export default ImageGallery;
