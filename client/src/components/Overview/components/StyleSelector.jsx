import React from 'react';


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
        <h4>Styles Info</h4>
      </div>
    )
  }
}

export default StyleSelector;
