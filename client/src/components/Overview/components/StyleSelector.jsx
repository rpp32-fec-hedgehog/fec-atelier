import React from 'react';
import _ from 'underscore';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylesInfo: ''
    };
  }

  render() {
    return (
      <div className="styles-info" data-testid="style-selector">
        <h4>Style {this.props.styleName}</h4>
        <div className="style-img-container">
          {_.map(this.props.styleImgs, (style, index) => {
            if (index % 4 === 0) {
              return (
              <span key={index}>
                <br></br>
                <img className="style-img" id={index} src={style} onClick={this.props.selectStyle}></img>
              </span>)
            } else {
              return (
              <span key={index}>
                <img className="style-img" id={index} src={style} onClick={this.props.selectStyle}></img>
              </span>)
            }
            })}
        </div>
      </div>
    )
  }
}

export default StyleSelector;
