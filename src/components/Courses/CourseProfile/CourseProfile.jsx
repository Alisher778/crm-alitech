import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebaseConfig';
import cssClasses from './CourseProfile.css';

const db = firebase.firestore().collection('courses');

class CourseProfile extends Component {
    state = {studentsList: [{id: null, name: 'Alisher'}]}
    componentDidMount() {
        const {id} = this.props.match.params;
        db.doc(id).get().then(doc => {
            console.log(doc.data())
            this.setState({id: doc.id, ...doc.data()})
            console.log(doc.data().studentsList[0])
        }).catch(err => console.log(err));
    }

    removeUserHandler = (id) => {
        this.setState(prevState => {
            console.log(prevState)
            return { studentsList: prevState.studentsList.filter(item => item.id !== id)}
        });
        console.log(this.state.studentsList.filter(item => item.id !== id))
        db.doc(this.state.id).update({studentsList: this.state.studentsList.filter(item => item.id !== id)})
            
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
                        <span className="LessonStarts">{lessonStarts}</span>
                        <span className="LessonEnds">{lessonEnds}</span>
                    </div>
                    <div className="Days">
                        <span className="WhatDay">{whatDay}</span>
                        <span className="studentsNumber">{}</span>
                    </div>

                    <div className="CourseLength">
                        <span className="StartDate">{startDate}</span>
                        <span className="EndDate">{endDate}</span>
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
                                        <img src={item.img} alt={item.name}/>
                                        <div className="UserInfo">
                                            <h4>{item.name}</h4>
                                            <span>{item.enrolled}</span>
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

export default CourseProfile;