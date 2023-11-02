import React from 'react';
import './navbar.scss';
import {
    NavLink,
    Route
} from "react-router-dom";
import fb from '../../assets/img/icons/fb.svg';
import ig from '../../assets/img/icons/ig.svg';
import linkin from '../../assets/img/icons/linkin.svg';
import git from '../../assets/img/icons/git.svg';
import menu from '../../assets/img/icons/menu.svg';
import logo from '../../assets/img/logo192.png';
import MenuLinks from '../menuLinks/menuLinks';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.menuComponent = React.createRef();
        this.state = {
            showMenu: false,
        }
    }
      
    toggleSidebar = () => {
    
    }
    
    toggleNavbar(nextState){
        console.log(nextState);
        this.setState({
            showMenu: nextState
        });
        this.sidebarComponent.current.toggleMenu();
        console.log(this.state.showMenu)
    }

    render(){
        const { showMenu } = this.state;
        return (
            <nav>
                <div className="nav-center">
                    <div className="nav-header">
                        <img className="logo" src={logo} alt="Logo Place"/>
                        <button className='nav-toggle' onClick={() => this.toggleNavbar(!showMenu)}><img src={menu} alt=""/></button>
                    </div>
                    <MenuLinks ref={this.menuComponent}></MenuLinks>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/ovydke/" rel='noreferrer' target='_blank'><img src={fb} alt="facebook icon"/></a>
                        <a href="https://www.linkedin.com/in/ovidijus-mykolaitis-468750190/" rel='noreferrer' target='_blank'><img src={linkin} alt="linkedin icon"/></a>
                        <a href="https://www.instagram.com/ovydke/" rel='noreferrer' target='_blank'><img src={ig} alt="instagram icon"/></a>
                        <a href="https://github.com/0vydke" rel='noreferrer' target='_blank'><img src={git} alt="git repo icon"/></a>
                    </div>
                </div>
            </nav>
        );
    }
}  