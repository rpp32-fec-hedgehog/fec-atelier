import React from 'react';
import $ from 'jquery';

class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: '',
      time: ''
    };
  }

  sendMetrics(e) {
    let metrics = {
      element: e.target.className,
      widget: 'Questions & Answers',
      time: Date.now()
    }

    $.ajax({
      url: '/interactions',
      method: 'POST',
      data: metrics,
      success: () => {
        console.log('Metric Recorded');
      },
      error: err => {
        alert(err);
      }
    })
  }

  render() {
    return (
      <div>
        {this.props.render(this.sendMetrics)}
      </div>
    )
  }
}

export default ClickTracker;
