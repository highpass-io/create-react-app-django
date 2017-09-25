import React, { Component } from 'react';
import Loadable from 'react-loadable';
import logo from './logo.svg';
import './App.css';

function Loading() {
  return (
    <div className="Loading">
      <p className="Loading-intro">Loading component via code-splitting...</p>
    </div>
  );
}

const CodeSplitLoadable = Loadable({
  loader: () => import('./CodeSplit'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CodeSplitLoadable />
      </div>
    );
  }
}

export default App;
