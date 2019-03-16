import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import cssClasses from './AddCourse.css';
import firebase from '../../../config/firebaseConfig';

const db = firebase.firestore().collection('courses');
const studentsDb = firebase.firestore().collection('students');


const initialState = {
        course: {
            img: '',
            info: '',
            price:'',
            title: '',
            status: '',
            whatDay: [],
            endDate: null,
            duration: '',
            lessonStarts: null,
            lessonEnds: null,
            startDate: null,
            studentsList: []
        },
        msg: '',
        students: [],
        selectedStudents: []
    }

class AddCourse extends Component {
    state = initialState;
     
    componentDidMount() {
        studentsDb.get().then(data => {
            let newStudents = [];
            data.docs.forEach(item => newStudents.push({id: item.id,...item.data()}));
            this.setState({students: newStudents})
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({course: {...this.state.course, [name]:value}})
    }

    formHandler = (e) => {
        e.preventDefault();
        db.add({...this.state.course, studentsList: this.state.selectedStudents}).then(res => {
            this.setState({...initialState, msg: 'Course has been created successfully'});
            const form = document.getElementById('coursesForm');
            form.reset();
        })
        .catch(err => console.log(err))
    }
    checkboxHandler = (e) => {
        const form = document.getElementById('coursesForm');
        const checkedInput = form.querySelectorAll('[type=checkbox]:checked');
        let checkedDay = [];
        checkedInput.forEach(item => checkedDay.push(item.value));
        this.setState({course: {...this.state.course, whatDay: checkedDay}});
        
    }

    
    render() {
        const {
            info,
            price,
            title,
            status,
            whatDay,
            endDate,
            duration,
            lessonStarts,
            lessonEnds,
            startDate,
            studentsList
        } = this.state.course;
        console.log(this.state)
        return (
            <div>
                <div className={cssClasses.CourseActions}>
                    <Link to="/courses/">Back Courses</Link>
                    <h3>{this.state.msg}</h3>
                </div>
                <div className="CourseForm">
                    <h2>Add Courses</h2>
                    <form id="coursesForm" onSubmit={(e) => this.formHandler(e)}>
                        <div className={cssClasses.InputWrapper}>
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="Title"
                                value={title}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <input 
                                type="file" 
                                name="img" 
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <input 
                                type="text" 
                                name="price" 
                                placeholder="Price"
                                value={price}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <DatePicker
                                selected={lessonStarts}
                                onChange={(data) => this.setState({course: {...this.state.course, lessonStarts: Date.parse(data)}})}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                dateFormat="h:mm aa"
                                timeCaption="Time"
                                name="lessonStarts"
                                placeholderText="Lesson Start Time"
                            />
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <DatePicker
                            selected={lessonEnds}
                            onChange={(data) => this.setState({course: {...this.state.course, lessonEnds: Date.parse(data)}})}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            dateFormat="h:mm aa"
                            timeCaption="Time"
                            name="lessonEnds"
                            placeholderText="Lesson End Time"
                            />
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <DatePicker
                                selected={startDate}
                                onChange={(data) => this.setState({course: {...this.state.course, startDate: Date.parse(data)}})}
                                placeholderText="Start Date"
                                name="startDate"
                            />
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <DatePicker
                                selected={endDate}
                                onChange={(data) => this.setState({course: {...this.state.course, endDate: Date.parse(data)}})}
                                name="endDate"
                                placeholderText="End Date"
                            />
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <input 
                                type="text" 
                                name="duration" 
                                value={duration}
                                placeholder="Duration"
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <input type="checkbox" value="monday" onChange={(e) => this.checkboxHandler(e)}/> Monday
                            <input type="checkbox" value="tuesday"  onChange={(e) => this.checkboxHandler(e)}/> Tuesday
                            <input type="checkbox" value="wednesday"  onChange={(e) => this.checkboxHandler(e)}/> Wednesday
                            <input type="checkbox" value="thursday"  onChange={(e) => this.checkboxHandler(e)}/> thursday
                            <input type="checkbox" value="friday"  onChange={(e) => this.checkboxHandler(e)}/> Friday
                            <input type="checkbox" value="saturday"  onChange={(e) => this.checkboxHandler(e)}/> Saturday
                            <input type="checkbox" value="sunday"  onChange={(e) => this.checkboxHandler(e)}/> Sunday
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <input type="radio" value="active" name="status"  onChange={(e) => this.handleChange(e)}/> Active
                            <input type="radio" value="inactive" name="status"  onChange={(e) => this.handleChange(e)}/> Inactive
                            <input type="radio" value="canceled" name="status"  onChange={(e) => this.handleChange(e)}/> Canceled
                        </div>
                        <div className={cssClasses.InputWrapper}>
                            <textarea 
                                name="info" 
                                placeholder="Brief about course"
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div>
                            <button>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddCourse;