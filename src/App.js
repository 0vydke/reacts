import React from 'react';
import './App.scss';
import Colorfliper from './views/colorfliper/colorFliper';
import Counter from './views/counter/counter';
import './assets/scss/animations.scss';
import './assets/scss/all.scss';
import './views/counter/counter.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReviewCarousel from './views/reviewCarousel/reviewCarousel';
import Sidebar from './components/sidebar/sidebar';

import menu from './assets/img/icons/menu.svg';
import modal from './assets/img/icons/modal.svg';
// import Navbar from './components/sidebar/sidebar';
import Home from './views/home/home';
import Modal from './components/modal/modal';
import Faq from './views/faq/faq';
import Restaurant from './views/restaurant/restaurant';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.sidebarComponent = React.createRef();
    this.modalComponent = React.createRef();
  }
  
  toggleSidebar = () => {
    this.sidebarComponent.current.toggleSidebar();
  }

  openModal=()=> {
    this.modalComponent.current.openModal();
  }
  
  render(){
    return (
      <Router>
        <Modal ref={this.modalComponent}></Modal>
        <div className="App">
          {/* <Navbar></Navbar> */}
          <Sidebar ref={this.sidebarComponent}></Sidebar>
          <div className="content">
            <button className='menu' onClick={this.toggleSidebar}>
              <img src={menu} alt="" />
            </button>
            <button className='modal-toggle' onClick={this.openModal}>
              <img src={modal} alt="" />
            </button>
            <Switch>
              <Route path="/views/colorfliper">
                <Colorfliper />
              </Route>
              <Route path="/views/counter">
                <Counter />
              </Route>
              <Route path="/views/reviewcarousel">
                <ReviewCarousel />
              </Route>
              <Route path="/views/faq">
                <Faq />
              </Route>
              <Route path="/views/restaurant">
                <Restaurant />
              </Route>
              <Route path="">
                <Home></Home>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
