import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebaseConfig';
import cssClasses from './AddStudent.css';
const db = firebase.firestore().collection('students');
const courseDB = firebase.firestore().collection('courses');

class AddStudent extends Component {
    state = { info : {
                    firstName: '', 
                    lastName: '', 
                    phone: '', 
                    email: '', 
                    address: '',
                    status: 'active',
                    payments: [],
                    attendances: [],
                    createdAt: Date.now(), 
                    updatedAt: Date.now(),
                    courseId: '',
                },   
              courseList: []
            }
    componentDidMount() {
        courseDB.where('status', '==', 'active').get().then(snapShots => {
            let coursesArray = [];
            snapShots.docs.forEach(doc => {
                coursesArray.push({id: doc.id, ...doc.data()})
            });
            return this.setState({courseList: coursesArray});
        })
    }

    userInputHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({info:{...this.state.info, [name]: value}});
    }
    formSubmitHandler = (e) => {
        e.preventDefault();
        
        db.add({...this.state.info})
            .then(res => {
                console.log('[Successfully saved data]')
            })
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state)
        return(
            <div>
                <div className={cssClasses.ButtonWrapper}>
                    <Link className={cssClasses.BackButton} to="/students">Go Back</Link>
                </div>
                <h2>Add New Student</h2>
                <form>
                    <div id="bio">
                        <h4>Biography</h4>
                        <input 
                            type="text" 
                            name="firstName"  
                            placeholder="First Name"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="email"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <input 
                            type="number" 
                            name="phone" 
                            placeholder="Phone"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Address"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <select 
                            name="status" 
                            value={this.state.status} 
                            onChange={(event) => this.userInputHandler(event)}
                        > 
                            <option value="active">Students Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                            <option value="canceled">Canceled</option>
                        </select>
                        <select 
                            name="courseId" 
                            value={this.state.courseId} 
                            onChange={(event) => this.userInputHandler(event)}
                            required
                        >   <option value="">Choose The Course</option>
                            {this.state.courseList.map(item => {
                                return (
                                    <option value={item.id} key={item.id}>{item.title}</option>
                                );
                            })}
                        </select>
                        <button onClick={(event) => this.formSubmitHandler(event)}>Add Student</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddStudent;