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
    courseLinkHandler = (id) => {
        this.props.history.push('/courses/'+id);
    }
    render() {
        console.log(this.props.courses)
        return (
            <div>
                 <Link to="/courses/add-course">Add Course</Link>
                <h1>Courses</h1>
                {this.props.courses.map((item,i) => {
                    console.log(item)
                        return(
                            <SingleCourse 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                img={item.img} 
                                price={item.price} 
                                status={item.status} 
                                startDate={item.startDate} 
                                lessonEnds={item.lessonEnds} 
                                lessonStarts={item.lessonStarts} 
                                duration={item.duration} 
                                studentsNumber={item.studentsNumber}
                                courseLink={this.courseLinkHandler}
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