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
                    <button onClick={this.toggleSidebar}>Close</button>
                    
                </div>
                <ul>
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
                    </ul>
                    
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