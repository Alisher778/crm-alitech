import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../../../reducer/actions';
import firebase from '../../../config/firebaseConfig';
import cssClasses from './CourseProfile.css';

const db = firebase.firestore().collection('courses');
const studentsDB = firebase.firestore().collection('students');

class CourseProfile extends Component {
    state = { studentsList:[{id: null}] }
    componentDidMount() {
        const {id} = this.props.match.params;
        this.setState({ 
            ...this.props.courses.filter(item => item.id === id)[0]
        });
        studentsDB.where('courseId', 'array-contains', id).get().then(data => {
            let allStudentsList = [];
            console.log(data, '=====>')
            data.docs.forEach(doc => {
                allStudentsList.push({id: doc.id, ...doc.data()})
            });
            this.setState({studentsList: allStudentsList});
        })
    }

    removeUserHandler = (id) => {
        const isConfirm = window.confirm('Are you really want to remove the student?');
        if(isConfirm) {
            // const findStudent = this.state.studentsList.filter(students => students.id === id);
            // studentsDB.doc(id).update({courseId: findStudent.courseId.filter(item => item.id !== this.state.id)});
            this.setState(prevState => {
                return { 
                    studentsList: prevState.studentsList.filter(item => item.id !== id),
                    msg: 'The student has been removed from the course'
                }
            });
            db.doc(this.state.id).update({studentsList: this.state.studentsList.filter(item => item.id !== id)});
            const currentStudent = studentsDB.doc(id);
            currentStudent.get().then(doc => {
                currentStudent.update({
                    courseId: doc.data().courseId.filter(cId => cId !== this.state.id)
                });
            });

        }   
    }  
    
    render() {
        const {
            id,
            img, 
            info,
            price, 
            title, 
            status,
            endDate, 
            whatDay,
            duration, 
            startDate, 
            lessonEnds, 
            lessonStarts,
            studentsList 
        } = this.state;
        console.log(this.state)
        return (
            <div>
                <div className="CourseActions">
                    <Link to="/courses">Go Courses</Link>
                </div>
                <div className="Course">
                    <img src={img} width="400" alt={title}/>
                    <div className="TitlePrice">
                        <h3>{title}</h3>
                        <span className="Price">{price}</span>
                    </div>
                    <div className="StatusTime">
                        <span className="Status">{status}</span>
                        <span className="LessonStarts">{new Date(lessonStarts).toLocaleTimeString()}</span>
                        <span className="LessonEnds">{new Date(lessonEnds).toLocaleTimeString()}</span>
                    </div>
                    <div className="Days">
                        <span className="WhatDay">{whatDay}</span>
                        <span className="studentsNumber">{}</span>
                    </div>

                    <div className="CourseLength">
                        <span className="StartDate">{new Date(startDate).toLocaleDateString()} | </span>
                        <span className="EndDate">{new Date(endDate).toLocaleDateString()} | </span>
                        <span className="Duration">{duration}</span>
                    </div>

                    <p>{info}</p>
                </div>
                <div className="Students">
                    <div className="StudentsHeader">
                        <h3>All Students({studentsList.length})</h3>
                    </div>
                    <ul className="StudentsBody">
                        {studentsList.map((item, i) => {
                            return(
                                <li key={item.id}>
                                    <Link to={"/students/"+item.id} className={cssClasses.UserLink}>
                                        <img src={item.img || "https://image.flaticon.com/icons/svg/747/747011.svg"} alt={item.name}/>
                                        <div className="UserInfo">
                                            <h4>{item.firstName}</h4>
                                            <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                                            <span>{item.status}</span>
                                        </div>
                                    </Link>
                                    <span>
                                        <button onClick={() => this.removeUserHandler(item.id)}>Remove</button>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses.courses
    }
}

const mapDispatchtToProps = dispatch => {
    return {
        addToCourses: (data) => dispatch(fetchCourses(data))
    }
}

export default connect(mapStateToProps, mapDispatchtToProps)(CourseProfile);