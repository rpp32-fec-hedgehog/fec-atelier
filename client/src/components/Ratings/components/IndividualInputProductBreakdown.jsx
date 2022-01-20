import React from 'react'

class IndividualInputProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristic: props.characteristic,
      selectedRadio: 'none selected'
    }
    this.updateRadial = this.updateRadial.bind(this);
  }

  updateRadial(e) {
    console.log('radial clicked: ', e.target.value);
    this.setState({selectedRadio: e.target.value})
  }

  render(props) {

    let characteristic = this.state.characteristic;
    let label1 = '';
    let label2 = '';
    let label3 = '';
    let label4 = '';
    let label5 = '';

    if (characteristic === 'Comfort') {
      label1 = 'Uncomfortable';
      label2 = 'Slightly uncomfortable';
      label3 = 'Ok';
      label4 = 'Comfortable';
      label5 = 'Perfect';

      return (
        <div>
          <li className="char_list_item left">
            <span className="indent_less">{this.state.selectedRadio}</span>
            <br></br>
          <span>
            <div className="left">{characteristic}*</div>
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label1} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label2} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label3} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label4} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label5} name={characteristic}/>
            <br></br>
          </span>
          <span className="left indent">{label1}</span><span className="right">{label5}</span>
          <br></br><br></br>
          </li>
          <br></br>
        </div>
      )
    } else if (characteristic === 'Fit') {
      label1 = 'Runs tight';
      label2 = 'Runs slightly tight';
      label3 = 'Perfect';
      label4 = 'Runs slightly long';
      label5 = 'Runs long';

      return (
        <div>
          <li className="char_list_item left">
            <span className="indent">{this.state.selectedRadio}</span>
            <br></br>
          <span>
            {characteristic}*
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input onClick={this.updateRadial.bind(this)} type="radio" value={label1} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label2} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label3} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label4} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label5} name={characteristic}/>
            <br></br>
          </span>
          <span className="left indent">{label1}</span><span className="right">{label5}</span>
          <br></br><br></br>
          </li>
          <br></br>
        </div>
      )
    } else if (characteristic === 'Length') {
      label1 = 'Runs short';
      label2 = 'Runs slightly short';
      label3 = 'Perfect';
      label4 = 'Runs slightly long';
      label5 = 'Runs long';

      return (
        <div>
          <li className="char_list_item left">
          <span className="indent">{this.state.selectedRadio}</span>
            <br></br>
          <span>
            {characteristic}*
            &nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label1} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label2} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label3} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label4} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label5} name={characteristic}/>
            <br></br>
          </span>
          <span className="left indent">{label1}</span><span className="right">{label5}</span>
          <br></br><br></br>
          </li>
          <br></br>
        </div>
      )
    } else if (characteristic === 'Quality') {
      label1 = 'Poor';
      label2 = 'Below average';
      label3 = 'What I expected';
      label4 = 'Pretty great';
      label5 = 'Perfect';

      return (
        <div>
          <li className="char_list_item left">
          <span className="indent">{this.state.selectedRadio}</span>
            <br></br>
          <span>
            {characteristic}*
            &nbsp;
          <input onClick={this.updateRadial.bind(this)} type="radio" value={label1} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label2} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label3} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label4} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label5} name={characteristic}/>
            <br></br>
          </span>
          <span className="left indent">{label1}</span><span className="right">{label5}</span>
          <br></br><br></br>
          </li>
          <br></br>
        </div>
      )
    } else if (characteristic === 'Size') {
      label1 = 'A size too small';
      label2 = '½ a size too small';
      label3 = 'Perfect';
      label4 = '½ a size too big';
      label5 = 'A size too wide';

      return (
        <div>
          <li className="char_list_item left">
            <span className="indent">{this.state.selectedRadio}</span>
            <br></br>
          <span>
            {characteristic}*
            &nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label1} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label2} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label3} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label4} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label5} name={characteristic}/>
            <br></br>
          </span>
          <span className="left indent">{label1}</span><span className="right">{label5}</span>
          <br></br><br></br>
          </li>
          <br></br>
        </div>
      )
    } else if (characteristic === 'Width') {
      label1 = 'Too narrow';
      label2 = 'Slightly narrow';
      label3 = 'Perfect';
      label4 = 'Slightly wide';
      label5 = 'Too wide';

      return (
        <div>
          <li className="char_list_item left">
            <span className="indent">{this.state.selectedRadio}</span>
            <br></br>
          <span>
            {characteristic}*
            &nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label1} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label2} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label3} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label4} name={characteristic}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onClick={this.updateRadial.bind(this)} type="radio" value={label5} name={characteristic}/>
            <br></br>
          </span>
          <span className="left indent">{label1}</span><span className="right">{label5}</span>
          <br></br><br></br>
          </li>
          <br></br>
        </div>
      )
    }

  }
}

export default IndividualInputProductBreakdown;
