import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LayoutContainar from'./layout/container/LayoutContainar';

import logo from './resource/img/logo.svg';

  //  {/* 출처: 
  //       https://codingbroker.tistory.com/72     
  //       https://www.hohyeonmoon.com/blog/react-js-github-pages-deploy/      
  //       https://velog.io/@byjihye/react-github-pages */}

class App extends Component {

 

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="lay-container">

            <LayoutContainar 
              cayoutContent={ 
                <header className="App-header">
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/test1" component={()=><div>!!</div>}></Route>
                </header>
                // <div>
                //   <Route path="/" exact component={Home}></Route>
                //   <Route path="/test1" component={()=><div>!!</div>}></Route>
                // </div>
              }            
            />
            
    
          </div>

        </BrowserRouter>
      </div>
    );
  }

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

