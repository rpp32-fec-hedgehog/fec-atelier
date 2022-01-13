import React from 'react';
import Modal from 'react-modal';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating.jsx';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      product_name: '',
      rating: 0,
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photoes: [],
      characteristics: {},
      modalOpen: false,
      thumbnails: <></>,
      addPhoto: <button className="add-a-photo" onClick={this.addPhotos.bind(this)}>ADD PHOTOS</button>
    };
    this.chooseStars = this.chooseStars.bind(this);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({
      modalOpen: true,
      product_name: this.props.product_name
    });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({modalOpen: false, invalid: ''});
  }

  chooseStars(e) {
    console.log('stars clicked: ', e);
  }

  addPhotos(e) {
    e.preventDefault();
    // const client = filestack.init(API_KEYS.FILESTACK_API_KEY);
    // let options = {
    //   fromSources: ['local_file_system'],
    //   accept: ['image/*'],
    //   maxFiles: 5,
    //   disableTransformer: true,
    //   onFileSelected: file => {
    //     if (file.size > 1000 * 1000) {
    //       alert('File too big, select something smaller than 1MB');
    //     }
    //   },
    //   onFileUploadFinished: file => {
    //     let updatedPhotos = this.state.photos.slice();
    //     updatedPhotos.push(file.url);

    //     let updatedThumbnails = <div className="a-modal-thumbnails">{_.map(updatedPhotos, photo => {
    //       return <img className="a-modal-thumbnail" key={photo} src={photo}></img>
    //     })}</div>

    //     this.setState({photos: updatedPhotos, thumbnails: updatedThumbnails});
    //     if (this.state.photos.length === 5) {
    //       this.setState({addPhoto: <></>})
    //     }
    //   },
    //   onFileUploadFailed: file => {
    //     alert('File upload failed');
    //   }
    // };

    // client.picker(options).open();
  }

  // onClick(e) {
  //   e.preventDefault();
  //   console.log('click: ', e);
  // }

  submitReview(e) {
    e.preventDefault();
    let questionData = {

    };
    //validate and send
  }

  render() {
    const modalStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #000',
        borderRadius: '0px',
        fontFamily: 'sans-serif'
      }
    };

    return (
      <div className="new_review_modal">
        <button className="btn" onClick={this.openModal.bind(this)}>
          ADD A REVIEW&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          style={modalStyle}
          contentLabel="Post Your Review">
          <div className="new_review_meta">
            <span className="modal_label">Write your review<br></br> about the {this.state.product_name}</span>
            <span className="close_review_modal" onClick={this.closeModal.bind(this)}>X</span>
          </div>
          <div className="review_modal_form">
            <div className="review_modal_input">
              <StarRating onClick={this.chooseStars}></StarRating>

              <button onClick={this.submitReview.bind(this)}>SUBMIT REVIEW</button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default NewReview;
