import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/qa/questions/product_id=1',
    //   method: 'GET',
    //   success: (data) => {
    //     console.log('Server GET Success ', DATA);
    //   }
    // })
    console.log('something');
  }

  render() {
    return (
      <div>
        Put your components here
      </div>
    )
  }
}

export default QA;
