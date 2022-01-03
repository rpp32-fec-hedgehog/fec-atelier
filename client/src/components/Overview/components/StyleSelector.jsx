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
      <div className="styles-info" data-testid="style-selector" style={{border: "1px solid black"}}>
        <h4>Style</h4>
        <div className="styles">
          {_.map(this.props.styleData, style => {
            return (<img className="style-img" key={style} src={style}></img>)
          })}
        </div>
      </div>
    )
  }
}

export default StyleSelector;
