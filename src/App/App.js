// Import Dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { Welcome } from '../Welcome/Welcome';
import { Portfolio } from '../Portfolio/Portfolio';
import { Techstack } from '../Techstack/Techstack';
import { Contact } from '../Contact/Contact';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="navbar">
            <ul>
              <li><a href="#welcome">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#techstack">Tech</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/" component={Techstack} />
          <Route exact path="/" component={Contact} />
          <footer className="footer"></footer>
        </div>
      </div>
    );
  }
}

export default App;
