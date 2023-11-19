
import React from 'react';
import './home.scss';
import MenuLinks from '../../components/menuLinks/menuLinks';

import video from '../../assets/video/glitch.mp4';
import Tabs from '../../components/tabs/tabs';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true
    }
  }
  
  getVideo = elem => {
    this.video = elem
  }

  toggleVideo = () => {
    if(!this.state.play){
      this.video.play();
    } else {
      this.video.pause();
    }
    this.setState({
      play: !this.state.play
    })
  };


  render(){
    return (
      <div className="fade-in home" >
        <div className="holder">
          <MenuLinks></MenuLinks>
          {/* <video ref={this.getVideo}  className='videoTag' autoPlay loop muted>
              <source src={video} type='video/mp4' />
          </video> */}
        </div>
        <Tabs></Tabs>
          {/* <button onClick={this.toggleVideo} className='videoToggle'>
            {this.state.play ? 'Play' : 'Stop'}
          </button> */}
      </div>
    );
  }

}
