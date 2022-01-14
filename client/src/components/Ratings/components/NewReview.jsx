import React from 'react';
import Modal from 'react-modal';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating.jsx';
import InputProductBreakdowns from './InputProductBreakdowns.jsx';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      rating: 0,
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      modalOpen: false,
      stars: ['images/white_star.png', 'images/white_star.png', 'images/white_star.png', 'images/white_star.png', 'images/white_star.png'],
      star_meaning: '',
      thumbnails: <></>,
      addPhoto: <button className="add_photo" onClick={this.addPhotos.bind(this)}>ADD PHOTOS</button>
    };
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
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
    e.preventDefault();

    let starNum = parseInt((e.target.className).slice(5));
    let newMeaning = '';

    if (starNum === 1) {
      newMeaning = 'Poor';
    } else if (starNum === 2) {
      newMeaning = 'Fair';
    } else if (starNum === 3) {
      newMeaning = 'Average';
    } else if (starNum === 4) {
      newMeaning = 'Good';
    } else if (starNum === 5) {
      newMeaning = 'Great';
    }

    let newStars = this.state.stars;

    for (let i = 0; i < starNum; i++) {
      newStars[i] = 'images/black_star.png';
    }

    this.setState({
      stars: newStars,
      star_meaning: newMeaning
    });
  }

  handleSummaryChange(e) {
    e.preventDefault();
    this.setState({ summary: e.target.value });
    console.log(e.target.value);
  }

  handleBodyChange(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
    console.log(e.target.value);
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

  submitReview(e) {
    e.preventDefault();
    console.log('submit review clicked: ', e);
    let questionData = {

    };
    //validate and send
    //if passes validation, close the model
  }

  render(props) {

    let characteristics = this.props.ratings_characteristics;

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
            <span className="modal_label"><h3>Write your review</h3> About the {this.props.item_name}</span>
            {/* <span className="close_review_modal" onClick={this.closeModal.bind(this)}>X</span> */}
          </div>
          <div className="review_modal_form">
            <div className="review_modal_input">
              <br></br>
              How would you rate this product?&nbsp;
              <img src={this.state.stars[0]} alt='loading' width="20" height="20"className=".star1" onClick={this.chooseStars.bind(this)}/>
              <img src={this.state.stars[1]} alt='loading' width="20" height="20"className=".star2" onClick={this.chooseStars.bind(this)}/>
              <img src={this.state.stars[2]} alt='loading' width="20" height="20"className=".star3" onClick={this.chooseStars.bind(this)}/>
              <img src={this.state.stars[3]} alt='loading' width="20" height="20"className=".star4" onClick={this.chooseStars.bind(this)}/>
              <img src={this.state.stars[4]} alt='loading' width="20" height="20"className=".star5" onClick={this.chooseStars.bind(this)}/>
              &nbsp;<span>{this.state.star_meaning}</span>
              <br></br><br></br>
              <div>Do you recommend this product?
                <input type="radio" value="Yes" name="recommend" /> Yes
                <input type="radio" value="no" name="recommend" /> No
              </div>
              <div>
                <InputProductBreakdowns characteristics={characteristics}></InputProductBreakdowns>
              </div>
              <div>
                <textarea value={this.state.summary} name="summary" onChange={this.handleSummaryChange} rows={4} maxLength={60} placeholder={"Example: Best purchase ever!"}/>
              </div>
              <div>
                <textarea value={this.state.body} name="body" onChange={this.handleBodyChange} rows={8} maxLength={1000} placeholder={"Why did you like the product or not?"}/>
              </div>
              <br></br>
              <button onClick={this.submitReview.bind(this)}>SUBMIT REVIEW</button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
//onChange={}
export default NewReview;
