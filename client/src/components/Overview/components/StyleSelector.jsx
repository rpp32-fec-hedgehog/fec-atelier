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
      <div className="styles-info" data-testid="style-selector">Styles Info</div>
    )
  }
}

export default StyleSelector;
