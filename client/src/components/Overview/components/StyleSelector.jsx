import React from 'react';
import _ from 'underscore';
import { Checkmark } from 'react-checkmark';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
    this.selectStyle = this.selectStyle.bind(this);
    this.addCheckmark = this.addCheckmark.bind(this);
  }

  selectStyle(e) {
    this.props.selectStyle(e);
    this.addCheckmark(e);
  }

  addCheckmark(e) {
    this.setState({
      isChecked: !this.state.isChecked
    })

    // console.log(e.target.parentElement)
    // return e.target.parentElement.insertAdjacentHTML('afterbegin', <Checkmark size='15px' color='blue'/>)
    // return <Checkmark size='15px' color='blue'/>
    return true;
  }

  render() {
    const checkmark = <Checkmark size='15px' color='blue'/>
    return (
      <div className="styles-info" data-testid="style-selector">
        <h4>Style {this.props.styleName}</h4>
        <div className="style-img-container">
          {_.map(this.props.styleImgs, (style, index) => {
            console.log('re render')
            if (index % 4 === 0) {
              return (
              <span key={index} className="style-img-background">
                <br></br>
                {this.props.selectedStyle === index && checkmark}
                <img className="style-img" id={index} src={style} onClick={this.selectStyle}></img>
              </span>)
            } else {
              return (
              <span key={index} className="style-img-background">
                {this.props.selectedStyle === index && checkmark}
                <img className="style-img" id={index} src={style} onClick={this.selectStyle}></img>
              </span>)
            }
          })}
        </div>
      </div>
    )
  }
}

export default StyleSelector;
