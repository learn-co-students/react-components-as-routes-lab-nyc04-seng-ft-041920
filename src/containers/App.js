import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movies" component={Movies} />
          <Route path="/directors" component={Directors}/>
          <Route path="/actors" render={() => <Actors />}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App
