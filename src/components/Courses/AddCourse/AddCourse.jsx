import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import cssClasses from './AddCourse.css';
import firebase from '../../../config/firebaseConfig';

const db = firebase.firestore().collection('courses');

class AddCourse extends Component {
    state = {
        title: '',
        lessonStarts: null,
        lessonEnds: null,
        startDate: null,
        endDate: null,
        duration: '',
        whatDay: [],
        status: ''
    }
     
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    }

    formHandler = (e) => {
        e.preventDefault();
        db.add(this.state).then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))

    }
    checkboxHandler = (e) => {
        const form = document.getElementById('coursesForm');
        const checkedInput = form.querySelectorAll('[type=checkbox]:checked');
        let checkedDay = [];
        checkedInput.forEach(item => checkedDay.push(item.value));
        this.setState({whatDay: checkedDay});
        
    }
    
    render() {
        return (
            <div>
                <Link to="/courses/">Back Courses</Link>
                <h2>Add Courses</h2>
                <form id="coursesForm" onSubmit={(e) => this.formHandler(e)}>
                    <div className={cssClasses.InputWrapper}>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Title"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div className={cssClasses.InputWrapper}>
                        <DatePicker
                            selected={this.state.lessonStarts}
                            onChange={(data) => this.setState({lessonStarts: data})}
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
                           selected={this.state.lessonEnds}
                           onChange={(data) => this.setState({lessonEnds: data})}
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
                            selected={this.state.startDate}
                            onChange={(data) => this.setState({startDate: data})}
                            placeholderText="Start Date"
                            name="startDate"
                        />
                    </div>
                    <div className={cssClasses.InputWrapper}>
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={(data) => this.setState({endDate: data})}
                            name="endDate"
                            placeholderText="End Date"
                        />
                    </div>
                    <div className={cssClasses.InputWrapper}>
                        <input 
                            type="text" 
                            name="duration" 
                            placeholder="Duration"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div className={cssClasses.InputWrapper}>
                        <input type="checkbox" value="monday" name="whatDay[]"  onChange={(e) => this.checkboxHandler(e)}/> Monday
                        <input type="checkbox" value="tuesday" name="whatDay[]"  onChange={(e) => this.checkboxHandler(e)}/> Tuesday
                        <input type="checkbox" value="wednesday" name="whatDay[]"  onChange={(e) => this.checkboxHandler(e)}/> Wednesday
                        <input type="checkbox" value="thursday" name="whatDay[]"  onChange={(e) => this.checkboxHandler(e)}/> thursday
                        <input type="checkbox" value="friday" name="whatDay[]"  onChange={(e) => this.checkboxHandler(e)}/> Friday
                        <input type="checkbox" value="saturday" name="whatDay[]"  onChange={(e) => this.checkboxHandler(e)}/> Saturday
                        <input type="checkbox" value="sunday" name="whatDay[]"  onChange={(e) => this.checkboxHandler(e)}/> Sunday
                    </div>
                    <div className={cssClasses.InputWrapper}>
                        <input type="radio" value="active" name="status"  onChange={(e) => this.handleChange(e)}/> Active
                        <input type="radio" value="inactive" name="status"  onChange={(e) => this.handleChange(e)}/> Inactive
                        <input type="radio" value="canceled" name="status"  onChange={(e) => this.handleChange(e)}/> Canceled
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCourse;