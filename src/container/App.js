import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../reducer/actions';
import './App.css';
import Students from '../components/Students/Students';
import StudentProfile from '../components/Students/StudentProfile/StudentProfile';
import AddStudent from '../components/Students/AddStudent/AddStudent';
import WebFont from 'webfontloader';
import cssClasses from './App.css';

WebFont.load({
  google: {
    families: ['Cabin:400,700', ]
  }
});

class App extends Component {
  sidebarHandler = () => {
    this.props.sidebarToggle(!this.props.sidebar.isOpen);
  }
  render() {
    console.log(this.props.sidebar)
    return (
        <main>
			    <Sidebar toggle={this.sidebarHandler} status={this.props.sidebar.isOpen}/>
        	<section id="main-content" className={this.props.sidebar.isOpen?cssClasses.w75:null}>
            <Switch>
              <Route path="/students" exact component={Students}/>
              <Route path="/students/add-student" exact component={AddStudent}/>
              <Route path="/students/:id" component={StudentProfile}/>
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
