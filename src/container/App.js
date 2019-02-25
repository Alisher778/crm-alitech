import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
        <main>
			<Sidebar />
        	<h1>Hello react</h1>
        </main>
    );
  }
}

export default App;
