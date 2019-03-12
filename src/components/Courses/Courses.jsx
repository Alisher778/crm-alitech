import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleCourse from './SingleCourse/SingleCourse';
import firebase from '../../config/firebaseConfig';
import { fetchCourses } from '../../reducer/actions';

const db = firebase.firestore().collection('courses');

class Courses extends Component {
    componentDidMount() {
        db.get().then(data => {
            const {docs} = data;
            let courseData = [];
            docs.forEach(item => {
                let dataWithId = {id: item.id,...item.data()}
                courseData.push(dataWithId)
            })
            this.setState({courses: courseData})
            this.props.addToCourses(courseData);
        })
    }
    render() {
        console.log(this.props.courses)
        const { 
            id,
            img, 
            price, 
            title, 
            status, 
            duration, 
            startDate, 
            lessonEnds, 
            lessonStarts, 
            studentsNumber
        } = this.props.courses;
        return (
            <div>
                 <Link to="/courses/add-course">Add Course</Link>
                <h1>Courses</h1>
                {this.props.courses.map((item,i) => {
                    return(
                        <SingleCourse 
                            key={id}
                            id={id}
                            title={title}
                            img={img} 
                            price={price} 
                            status={status} 
                            startDate={startDate} 
                            lessonEnds={lessonEnds} 
                            lessonStarts={lessonStarts} 
                            duration={duration} 
                            studentsNumber={studentsNumber}
                        />
                    )
                })}
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
export default connect(mapStateToProps, mapDispatchtToProps)(Courses);