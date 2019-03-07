import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../reducer/actions';
import './App.css';
import StudentsList from '../components/Students/StudentsList/StudentsList';
import StudentProfile from '../components/Students/StudentProfile/StudentProfile';

class App extends Component {
  sidebarHandler = () => {
    this.props.sidebarToggle(!this.props.sidebar.isOpen);
  }
  render() {
    console.log(this.props.sidebar)
    return (
        <main>
			    <Sidebar toggle={this.sidebarHandler} status={this.props.sidebar.isOpen}/>
        	<section id="main-content" style={this.props.sidebar.isOpen?styles.w75:null}>
            <Switch>
              <Route path="/students" exact component={StudentsList}/>
              <Route path="/students/:id" component={StudentProfile}/>
            </Switch>
          </section>
        </main>
    );
  }
}
const styles = {
  w75: {
    width: '75%',
    marginLeft: '25%',
    transition:'1s'
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
