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
            const {docs} = data;
            console.log(data.id)
            let studentsData = [];
            docs.forEach(item => {
                let dataWithId = {id: item.id,...item.data()}
                studentsData.push(dataWithId)
            })
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
                <div className={cssClasses.TabelHeading}>
                    <input type="checkbox" className={cssClasses.Input} />
                    <b className={cssClasses.Photo}>Photo</b>
                    <b className={cssClasses.Info}>Student Info</b>
                    <b className={cssClasses.Phone}>Phone</b>
                    <b className={cssClasses.Status}>Status</b>
                    <b className={cssClasses.Course}>Course</b>
                    <b className={cssClasses.Joined}>Joined</b>
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
                                router={this.props}
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