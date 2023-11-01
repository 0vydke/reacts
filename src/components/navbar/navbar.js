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

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }
    
    toggleNavbar(nextState){
        console.log(nextState);
        this.setState({
            showMenu: nextState
        });
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
                    <ul className={"links " + (showMenu ? 'show' : 'hidden')}>
                        <li>
                            <NavLink activeClassName="active" to="/views/colorfliper">Color Fliper</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/views/counter">Counter</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/users">users</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/views/reviewcarousel">Review Carousel</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="">Home</NavLink>
                        </li>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/ovydke/" rel='noreferrer' target='_blank'><img src={fb} alt="facebook icon"/></a>
                            <a href="https://www.linkedin.com/in/ovidijus-mykolaitis-468750190/" rel='noreferrer' target='_blank'><img src={linkin} alt="linkedin icon"/></a>
                            <a href="https://www.instagram.com/ovydke/" rel='noreferrer' target='_blank'><img src={ig} alt="instagram icon"/></a>
                            <a href="https://github.com/0vydke" rel='noreferrer' target='_blank'><img src={git} alt="git repo icon"/></a>
                        </div>
                    </ul>
                    
            </div>
          </nav>
        );
    }
}  