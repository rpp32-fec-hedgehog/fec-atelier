import React from 'react';
import Modal from 'react-modal';

class ReviewImages extends React.Component {
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

  render(props) {

    if (this.props.photos) {
      if (this.props.photos.length > 0) {
        console.log('review image props: ', this.props.photos);
        const photos = this.props.photos;
        return (
          <div className="reviewImages" data-testid="review-images">
            <div>
              <ul className="product_breakdown">
                {photos.map((url) =>
                  <li key={url.id}>
                    <img className="review_image" src={url.url} alt="Loading"></img>
                  </li>
                )}
              </ul>
              {/* <ul>
                {this.props.photos ? <li><img src={this.props.photos[0].url} alt="Loading" style="width:20%"></img></li>: null}
              </ul> */}
            </div>
            <Modal isOpen={this.state.modalOpen} className="modalWindow">
              <button onClick={this.closeModal}>X</button>
            </Modal>
          </div>
        )
      } else {return <div></div>}
    } else {return <div></div>}
  }


}

export default ReviewImages;
