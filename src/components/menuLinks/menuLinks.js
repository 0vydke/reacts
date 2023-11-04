import React from 'react';
import './menuLinks.scss';
import {
    NavLink
} from "react-router-dom";

export default class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }
    toggleMenu = () =>{
        this.setState({
            showMenu: this.state.showMenu
        });
    }
    render(){
        const { showMenu } = this.state;
        return (
            <ul className={"links " + (showMenu ? 'show' : 'hidden')}>
                <li>
                    <NavLink activeClassName="active" to="/" exact={true}>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/views/colorfliper">Color Fliper</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/views/counter">Counter</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/views/reviewcarousel">Review Carousel</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/views/faq">FAQ</NavLink>
                </li>
            </ul>
        );
    }
}  