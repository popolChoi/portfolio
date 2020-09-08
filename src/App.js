import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LayoutContainar from'./layout/container/LayoutContainar';

import logo from './resource/img/logo.svg';

function App() {
  return (
    <div className="App">
      <LayoutContainar />
      <BrowserRouter>
    <header className="App-header">



      출처: 
      https://codingbroker.tistory.com/72     
      https://www.hohyeonmoon.com/blog/react-js-github-pages-deploy/      
      https://velog.io/@byjihye/react-github-pages


        <Link to="/">Home</Link>
        <Link to="/beauty">Beauty</Link>
        <Link to="/game">Game</Link>
        <Route path="/" exact component={Home}></Route>
        <Route path="/beauty" component={Beauty}></Route>
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