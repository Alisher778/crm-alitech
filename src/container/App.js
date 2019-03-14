import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../reducer/actions';
import './App.css';
// ********  Students COMPONENT *************
import Students from '../components/Students/Students';
import StudentProfile from '../components/Students/StudentProfile/StudentProfile';
import AddStudent from '../components/Students/AddStudent/AddStudent';
// *******  Courses Component **************
import Courses from '../components/Courses/Courses';
import AddCourse from '../components/Courses/AddCourse/AddCourse';
import CourseProfile from '../components/Courses/CourseProfile/CourseProfile';

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
    return (
        <main>
			    <Sidebar toggle={this.sidebarHandler} status={this.props.sidebar.isOpen}/>
        	<section id="main-content" className={this.props.sidebar.isOpen?cssClasses.w75:null}>
            <Switch>
              <Route path="/courses" exact component={Courses}/>
              <Route path="/courses/add-course" exact component={AddCourse}/>
              <Route path="/courses/:id" component={CourseProfile}/>
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
