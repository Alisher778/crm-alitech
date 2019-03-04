import React from 'react';
import { Link } from 'react-router-dom';
import cssClasses from './StudentsList.css';
import StudentProfile from '../StudentProfile/StudentProfile';

const Student = React.lazy(()=> import('../StudentProfile/StudentProfile'));

const studentList = (props) => {
    return(
        <table className={cssClasses.Table}>
            <thead>
                <tr className={cssClasses.StudentRow}>
                    <th>Profile</th>
                    <th>Full Name</th>
                    <th>Group</th>
                    <th>Payment</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className={cssClasses.StudentRow}>
                    <td><img src="https://image.flaticon.com/icons/svg/163/163814.svg" alt="User Name" className={cssClasses.ProfileImg}/></td>
                    <td><Link to="/students/alisher-musurmonov">Alisher Musurmonov</Link></td>
                    <td><a href="#group-link">AWS 4</a></td>
                    <td>12</td>
                    <td>:</td>
                </tr>
            </tbody>
        </table>
    );
}

export default studentList;