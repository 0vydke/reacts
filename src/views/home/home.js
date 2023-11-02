
import React from 'react';
import './home.scss';
import MenuLinks from '../../components/menuLinks/menuLinks';

export default class Home extends React.Component {
  render(){
    return (
      <div className="fade-in home" >
        <MenuLinks></MenuLinks>
      </div>
    );
  }

}
