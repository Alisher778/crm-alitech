import React, { Component } from 'react';
import User from './components/User'
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <h1>Hello react</h1>
          <User />
        </div>
      </ErrorBoundary>
    );
  }
}


export default App;
