
import React from 'react';
import './colorfliper.scss';

export default class Colorfliper extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    bgColor: "White"
  }
}

boxClick = (e) => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var hex = Math.floor(Math.random()*16777215).toString(16);
  var radios = document.getElementsByName('color');

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      if(radios[i].value === 'hex'){
        this.setState({
          bgColor: '#'+hex
        })
      }
      if(radios[i].value === 'rgb'){
        this.setState({
          bgColor: 'rgb('+r+','+g+','+b+')'
        })
      }
    }
  }

}
  render(){
    return (
      <div className="fade-in colorFliper" style={{backgroundColor: this.state.bgColor}}>
        <div className="container">
          <h3 id="currentColor" >Current color: <span style={{color: this.state.bgColor}}>{this.state.bgColor}</span></h3>
          <button onClick={this.boxClick}>Change Color</button>
          <div className="inputRow">
            <div>
              <label htmlFor="hex">Hex</label>
              <input type="radio" name="color" id="hex" value='hex' defaultChecked/>
            </div>
            <div>
              <label htmlFor="rgb">RGB</label>
              <input type="radio" name="color" id="rgb" value='rgb'/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
