import './App.css';
import Colorfliper from './views/colorfliper/colorFliper';
import Counter from './views/counter/counter';
import './assets/css/animations.css';
import './assets/css/all.scss';
import './views/counter/counter.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReviewCarousel from './views/reviewCarousel/reviewCarousel';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
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
