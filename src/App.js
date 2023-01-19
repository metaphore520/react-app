import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./components/child";
import ParentComponent from './components/parent';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <div>
        <ParentComponent></ParentComponent>
      </div>
    </React.Fragment>
  );
}

export default App;