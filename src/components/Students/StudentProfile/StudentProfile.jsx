import React from 'react';
import { Link } from 'react-router-dom';
import cssClasses from './StudentProfile.css';
import firebase from '../../../config/firebaseConfig';

const db = firebase.firestore().collection('students');
const studentProfile = (props) => {

    return (
        <div>
            <a href="#delet">Delete Student</a>
            <div className={cssClasses.Header}>
                <div className={cssClasses.HeaderLeft}>
                    <img src="https://image.flaticon.com/icons/svg/163/163814.svg" alt={props.user}/>
                </div>
                <div className={cssClasses.HeaderRight}>
                    <h3>Alisher Musurmonov</h3>
                    <ul>
                        <li>Phone: 99 555-88-77</li>
                        <li>Email: alisher@gmail.com</li>
                        <li>DOB: 30/12/1989</li>
                        <li>Address: Jizza Shaxar, Do'stlik Mahallasi</li>
                        <li>Class: <Link to="/courses/course-name">AWS 1</Link></li>
                        <li>Course Date: 12.03.2019 - 12.03.2019</li>
                    </ul>
                    <h3>Payment History</h3>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Debt</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>13.05.2019</td>
                            <td>300,000</td>
                            <td>0</td>
                            <td>PAID</td>
                        </tr>
                        <tr>
                            <td>13.05.2019</td>
                            <td>200,000</td>
                            <td>100,000</td>
                            <td>PENDING</td>
                        </tr>
                        <tr>
                            <td>13.05.2019</td>
                            <td>0</td>
                            <td>300,000</td>
                            <td>NOT PAID</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total:</td>
                            <td>700,000</td>
                        </tr>
                    </table>

                </div>
            </div>
            <div className={cssClasses.Attendance}>
                <h3>Class Attendance</h3>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Clock In</th>
                        <th>Clock Out</th>
                        <th>Attendent</th>
                        <th>Note</th>
                    </tr>
                    <tr>
                        <td>Mar, 16 2019</td>
                        <td>15:12</td>
                        <td>17:03</td>
                        <td>YES</td>
                        <td>Sick</td>
                    </tr>
                    <tr>
                        <td>Mar, 18 2019</td>
                        <td>--:--</td>
                        <td>--:--</td>
                        <td>NO</td>
                        <td>Married</td>
                    </tr>
                </table>
            </div>
            <div className={cssClasses.Tasks}>
                 <h3>Assignments</h3>
                <table>
                    <tr>
                        <th>Task</th>
                        <th>Mark</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
                        <td>10</td>
                        <td>Completed</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
                        <td>5</td>
                        <td>Resubmit</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
                        <td>0</td>
                        <td>Not Submited</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default studentProfile;