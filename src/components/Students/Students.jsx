import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cssClasses from './Students.css';
import firebase from '../../config/firebaseConfig';
import { getStudentsList, removeStudent } from '../../reducer/actions';
import SingleStudent from './SingleStudent/SingleStudent';


const db = firebase.firestore().collection('students');

class StudentsList extends Component {
    state = {checked: false, msg: ''}
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
        });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('====>  ', props)
    }

    componentDidUpdate(prevProps) {
       if(this.props.students.length !== prevProps.students.length) {
           console.log('Props are UPDATED')
       }
    }
    selectAllHandler = () => {
        this.setState(prevState => ({checked: !prevState.checked}))
    }

    removeStudentHandler = (id) => {
        this.props.removeSelectedStudent(id);
        db.doc(id).delete()
            .then(() => this.setState({msg: 'User has been removed'}))
            .catch((err) => this.setState({msg: err.message}))
    }
    
    render() {
        console.log(this.props.students)
        return(
            <div>
                <h4>{this.state.msg}</h4>
                <div className={cssClasses.StudentsActions}>
                    <Link to="/students/add-student" className={cssClasses.AddStudent}>New Student</Link>
                </div>
                <div className={cssClasses.TabelHeading}>
                    <input 
                        type="checkbox" 
                        className={cssClasses.Input} 
                        onChange={() => this.selectAllHandler()}
                    />
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
                                checked={this.state.checked}
                                removestudent={this.removeStudentHandler}
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
        addStudents: (data) => dispatch(getStudentsList(data)),
        removeSelectedStudent: (id) => dispatch(removeStudent(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);