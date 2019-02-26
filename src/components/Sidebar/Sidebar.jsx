import React from 'react';
import { Link } from 'react-router-dom';
import cssClasses from './Sidebar.css';
import logo from '../../assets/imgs/logo.svg';

const sidebar = (props) => {
    let menuClasses = cssClasses.SidebarLinks;
    console.log('classes',menuClasses)
    if(props.status) {
        menuClasses = [cssClasses.SidebarLinks, cssClasses.Open].join(' ');
    } else {
        menuClasses = [cssClasses.SidebarLinks, cssClasses.Close].join(' ');
    }
    return (
        <aside className={menuClasses}>
            <div className={cssClasses.CloseBtn} onClick={props.toggle}>X</div>
            <div className={cssClasses.NavLinks}>
                <Link to="/"><img src={logo} className={cssClasses.Logo} alt="Company Logo"/></Link>
                <Link to="/dashboard">Dashboar</Link>
                <Link to="/students">Students</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/teachers">Teachers</Link>
            </div>
        </aside>
    );
}

export default sidebar;