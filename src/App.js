import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

// Pages
import {Home} from './pages/Home.tsx';

function App() {
  return (
    <Router>
    <div>
      <nav className="navigation-bar">
        <ul>
          <li>
            <a href="#what_i_know">What I know</a>
          </li>
          <li>
          <a href="#projects">Projects</a>
          </li>
          <li>
          <a href="#github">GitHub</a>
          </li>
          <li>
          <a href="#aboutme">About Me</a>
          </li>
          <li>
          <a href="#timeline">Timeline</a>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/users">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
