import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cssClasses from './Students.css';
import firebase from '../../config/firebaseConfig';
import { getStudentsList } from '../../reducer/actions';
import SingleStudent from './SingleStudent/SingleStudent';


const db = firebase.firestore().collection('students');

class StudentsList extends Component {
    componentDidMount() {
        db.get().then(data => {
            const {docs, id} = data;
            let studentsData = [];
            docs.forEach(item => studentsData.push(item.data()))
            this.props.addStudents(studentsData);
        })
    }
    render() {
        console.log(this.props.students)
        return(
            <div>
                <div className={cssClasses.StudentsActions}>
                    <Link to="/students/add-student" className={cssClasses.AddStudent}>New Student</Link>
                </div>
                {this.props.students.map((student, i) => {
                    const {id, firstName, lastName, email, phone, createdAt} = student;
                    return( <SingleStudent
                                key={i}
                                id={id}   
                                name={firstName + ' ' + lastName}
                                email={email}
                                phone={phone}
                                joined={createdAt}
                            />
                    );
                })}
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
        addStudents: (data) => dispatch(getStudentsList(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);