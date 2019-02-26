import React from 'react';
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
                <a href="#home"><img src={logo} className={cssClasses.Logo} alt="Company Logo"/></a>
                <a href="#dashboard">Dashboar</a>
                <a href="#student">Students</a>
                <a href="#courses">Courses</a>
                <a href="#teachers">Teachers</a>
            </div>
        </aside>
    );
}

export default sidebar;