import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cssClasses from './StudentsList.css';
import firebase from '../../../config/firebaseConfig';
import { studentsList } from '../../../reducer/actions';


const db = firebase.firestore().collection('students');

class StudentsList extends Component {
    componentDidMount() {
        db.get().then(data => {
            const {docs} = data;
            console.log(docs)
            this.props.addStudents(docs)
        })
    }
    render() {
        console.log(this.props.students)
        return(
            <div>
                <Link to="/students/add-student">New Student</Link>
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        students: state.students.students
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addStudents: (data) => dispatch(studentsList(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);