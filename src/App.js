import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

// Pages
import {Home} from './pages/Home.tsx';
import {Projects} from './pages/Projects.tsx';

function App() {
  const backbutton = () =>{
    const loc = window.location.href;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if(loc.indexOf("/projects") > -1){
      return (
        <div className="home-button">
          <a href={`/#project-id-${urlParams.get("id")}`}>
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </div>
      )
    }else{
      return "";
    }
  }
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <nav className="navigation-bar">
        {backbutton()}
        <ul>
          <li>
            <a href="/#what_i_know">What I know</a>
          </li>
          <li>
          <a href="/#projects_list">Projects</a>
          </li>
          <li>
          <a href="/#aboutme">About Me</a>
          </li>
          <li>
          <a href="/#timeline">Timeline</a>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/projects">
          <Projects />
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
