import './App.css';
import Colorfliper from './views/colorfliper/colorFliper';
import Counter from './views/counter/counter';
import './assets/css/animations.css';
import './assets/css/all.scss';
import './views/counter/counter.scss';
import fb from './assets/img/icons/fb.svg';
import ig from './assets/img/icons/ig.svg';
import linkin from './assets/img/icons/linkin.svg';
import git from './assets/img/icons/git.svg';
import menu from './assets/img/icons/menu.svg';
import logo from './assets/img/mcLogo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img className="logo" src={logo} alt="Logo Place"/>
          <ul className="list">
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
              <NavLink activeClassName="active" to="">Home</NavLink>
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com/ovydke/" rel='noreferrer' target='_blank'><img src={fb} alt="facebook icon"/></a>
            <a href="https://www.linkedin.com/in/ovidijus-mykolaitis-468750190/" rel='noreferrer' target='_blank'><img src={linkin} alt="linkedin icon"/></a>
            <a href="https://www.instagram.com/ovydke/" rel='noreferrer' target='_blank'><img src={ig} alt="instagram icon"/></a>
            <a href="https://github.com/0vydke" rel='noreferrer' target='_blank'><img src={git} alt="git repo icon"/></a>
          </div>
          <button onClick=""><img src={menu} alt=""/></button>
        </nav>
        <Switch>
          <Route path="/views/colorfliper">
            <Colorfliper />
          </Route>
          <Route path="/views/counter">
            <Counter />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
