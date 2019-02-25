import React from 'react';
import cssClasses from './Sidebar.css';
import logo from '../../assets/imgs/logo.svg';

const sidebar = (props) => {
    return (
        <aside className={cssClasses.SidebarLinks}>
            <div className={cssClasses.CloseBtn}>X</div>
            <a href="#"><img src={logo} className={cssClasses.Logo} alt="Company Logo"/></a>
            <a href="#">Dashboar</a>
            <a href="#">Students</a>
            <a href="#">Courses</a>
            <a href="#">Teachers</a>
        </aside>
    );
}

export default sidebar;