import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebaseConfig';

const db = firebase.firestore().collection('courses');

class CourseProfile extends Component {
    state = {}
    componentDidMount() {
        const {id} = this.props.match.params;
        db.doc(id).get().then(doc => {
            console.log(doc.data())
            this.setState({id: doc.id, ...doc.data()})
        }).catch(err => console.log(err))
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
            studentsNumber,
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
                        <span className="studentsNumber">{studentsNumber}</span>
                    </div>

                    <div className="CourseLength">
                        <span className="StartDate">{startDate}</span>
                        <span className="EndDate">{endDate}</span>
                        <span className="Duration">{duration}</span>
                    </div>

                    <p>{info}</p>
                </div>
                <div className="Students"></div>
            </div>
        );
    }
}

export default CourseProfile;