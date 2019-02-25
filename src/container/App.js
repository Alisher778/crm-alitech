import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { connect } from 'react-redux';
import { toggleMenu } from '../reducer/actions';
import './App.css';

class App extends Component {
  sidebarHandler = () => {
    this.props.sidebarToggle(!this.props.sidebar.isOpen);
  }
  render() {
    console.log(this.props.sidebar)
    return (
        <main>
			    <Sidebar toggle={this.sidebarHandler} status={this.props.sidebar.isOpen}/>
        	<h1>Hello react</h1>
        </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    sidebar: state.sidebar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sidebarToggle: (status) => dispatch(toggleMenu(status))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
