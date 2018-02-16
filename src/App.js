import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import actions, { auto, reducers } from 'redux-auto';
const webpackModules = require.context("./store", true, /\.js$/);

const middleware = applyMiddleware(auto(webpackModules, webpackModules.keys()))
const store = createStore(combineReducers(reducers), middleware );

setTimeout(()=>{
  console.log('calling action');
  actions.app.getFoo({"newStuff": "this is new stuff"})
}, 1000)
 console.log('the Store by redux-auto:', store.getState())
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
