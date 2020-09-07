import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>     
      <header className="App-header">
      출처: https://codingbroker.tistory.com/72     https://www.hohyeonmoon.com/blog/react-js-github-pages-deploy/      https://velog.io/@byjihye/react-github-pages

      
        <Link to="/">Home</Link>
        <Link to="/beauty">Beauty</Link>
        <Link to="/game">Game</Link>
        <Route path="/" exact component={Home}></Route>
        <Route path="/beauty" component={Beauty}></Route>
        <Route path="/game" component={Game}></Route>
        </header>

      </BrowserRouter>
    </div>
  );
}

export default App;



function Home() {
  return (
      <div>
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
      </div>
  );
}

function Beauty() {
  return <div>Beauty component</div>;
}

function Game() {
  return <div>Game component</div>;
}

