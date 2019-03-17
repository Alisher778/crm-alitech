import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleCourse from './SingleCourse/SingleCourse';
import cssClasses from './Courses.css';
import firebase from '../../config/firebaseConfig';
import { fetchCourses, removeCourse } from '../../reducer/actions';

const db = firebase.firestore().collection('courses');

class Courses extends Component {
    state = {msg: ''}
    
    componentDidMount() {
        db.get().then(data => {
            const {docs} = data;
            let courseData = [];
            docs.forEach(item => {
                let dataWithId = {id: item.id,...item.data()}
                courseData.push(dataWithId)
            })
            this.props.addToCourses(courseData);
        });

    }

    static getDerivedStateFromProps(props, state) {
        console.log('Current State', state, '\n current props ',props)
    }

    componentDidUpdate(prevProps) {
        if(this.props.courses.length !== prevProps.courses.length) {
            console.log('Props are UPDATED')
        }
    }

    courseLinkHandler = (id) => {
        this.props.history.push('/courses/'+id);
    }

    deleteCourseHandler = (id) => {
        this.props.removeSelectedCourse(id);
        db.doc(id).delete()
            .then(() => this.setState({msg: 'User has been removed'}))
            .catch((err) => this.setState({msg: err.message}))
    }

    render() {
        return (
            <div>
                 <Link to="/courses/add-course">Add Course</Link>
                <h1>Courses</h1>
                <h4>{this.state.msg}</h4>
                <div className={cssClasses.CoursesList}>
                    {this.props.courses.map((item,i) => {
                            return(
                                <SingleCourse 
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    deleteCourse={this.deleteCourseHandler}
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
        addToCourses: (data) => dispatch(fetchCourses(data)),
        removeSelectedCourse: (id) => dispatch(removeCourse(id))
    }
}
export default connect(mapStateToProps, mapDispatchtToProps)(Courses);