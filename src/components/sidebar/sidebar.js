import React from 'react';
import './sidebar.scss';
import {
    NavLink,
    Route
} from "react-router-dom";
import fb from '../../assets/img/icons/fb.svg';
import ig from '../../assets/img/icons/ig.svg';
import linkin from '../../assets/img/icons/linkin.svg';
import git from '../../assets/img/icons/git.svg';
import logo from '../../assets/img/logo192.png';
import MenuLinks from '../menuLinks/menuLinks';
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }
    
    toggleSidebar = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    render(){
        const { showMenu } = this.state;
        return (
            <aside className={"sidebar " + (showMenu ? 'show' : 'hidden')}>
                <div className="header">
                    <img src={logo} alt="" />
                    <button onClick={this.toggleSidebar}>X</button>
                </div>
                <MenuLinks></MenuLinks>
                <div className="social-icons">
                    <a href="https://www.facebook.com/ovydke/" rel='noreferrer' target='_blank'><img src={fb} alt="facebook icon"/></a>
                    <a href="https://www.linkedin.com/in/ovidijus-mykolaitis-468750190/" rel='noreferrer' target='_blank'><img src={linkin} alt="linkedin icon"/></a>
                    <a href="https://www.instagram.com/ovydke/" rel='noreferrer' target='_blank'><img src={ig} alt="instagram icon"/></a>
                    <a href="https://github.com/0vydke" rel='noreferrer' target='_blank'><img src={git} alt="git repo icon"/></a>
                </div>
            </aside>
        );
    }
}  