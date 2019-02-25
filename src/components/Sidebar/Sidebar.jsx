import React from 'react';
import cssClasses from './Sidebar.css';

const sidebar = (props) => {
    return (
        <aside className={cssClasses.SidebarLinks}>
            <a href="#">Dashboar</a>
            <a href="#">Students</a>
            <a href="#">Courses</a>
            <a href="#">Teachers</a>
        </aside>
    );
}

export default sidebar;