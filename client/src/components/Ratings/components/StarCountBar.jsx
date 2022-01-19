import React from 'react';

class StarCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.flipFilter = this.flipFilter.bind(this);
  }

  flipFilter(e) {

    if (this.props) {
      console.log('this props: ', this.props);
      this.props.getAllReviews(this.props.item_id, this.props.sort, 100, (error, result) => {
        if (error) {
          console.log('client reports retrieve reviews error: ', error.message);
        } else {
          // this.setState({
          //   ratings: result,
          //   ratings_to_display: result.slice(0, 2)
          // });
        }
      })
    }
    this.props.flip_filters(e.target.innerHTML);
    this.props.filter_data();
  }

  render(props) {

    //console.log('this props: ', this.props);

    let star_count = this.props.star_count;
    const star_number = this.props.star_number;

    if (isNaN(star_count)) {
      return (
        <li>
          <br></br>{star_number} stars <span className="star_bar"></span>
        </li>
      );
    } else {
      return (
        <li>
          <br></br><span className="star_bar_outer" onClick={this.flipFilter}>{star_number} stars</span><span className="star_bar" style={{width: parseInt(star_count)}}></span>
        </li>
      );
    }
  }
}

export default StarCount;
