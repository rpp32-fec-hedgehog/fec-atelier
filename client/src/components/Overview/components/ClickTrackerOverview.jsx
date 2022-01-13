import React from 'react';
import $ from 'jquery';

class ClickTrackerOverview extends React.Component {
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
      widget: 'Overview',
      time: new Date()
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

export default ClickTrackerOverview;
