import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../reducer/actions';
import './App.css';
import StudentList from '../components/Students/StudentsList';

class App extends Component {
  sidebarHandler = () => {
    this.props.sidebarToggle(!this.props.sidebar.isOpen);
  }
  render() {
    console.log(this.props.sidebar)
    return (
        <main>
			    <Sidebar toggle={this.sidebarHandler} status={this.props.sidebar.isOpen}/>
        	<section id="main-content">
            <Switch>
              <Route path="/students" component={StudentList}/>
            </Switch>
          </section>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
