import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebaseConfig';
import cssClasses from './EditStudent.css';
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
                    updatedAt: Date.now(),
                    courseId: [],
                },   
              courseList: [],
              msg: ''
            }
    componentDidMount() {
        console.log(this.props.match)
        db.doc(this.props.match.params.id).get()
            .then(doc => {
                this.setState({info: {...doc.data(), id: doc.id }})
            })
            .catch(err => this.setState({msg: err.message}));

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
        
        if(name === 'courseId') {
            const courses = this.state.info.courseId;
            this.setState({
                info:{...this.state.info, courseId: courses.concat(value)}
            });

        } else {
            this.setState({info:{...this.state.info, [name]: value}});
        }
    }
    formSubmitHandler = (e) => {
        e.preventDefault();
        
        db.doc(this.props.match.params.id).update({...this.state.info})
            .then(res => {
                this.setState({msg: 'Changes saved successfully'})
            })
            .catch(err => console.log(err));
        // Add current student to the courses studentsList collection
        this.state.info.courseId.forEach((id) => {
            courseDB.doc(id).collection('studentsList').add(this.state.info);
        });
    }
    render() {
        console.log(this.state)
        return(
            <div>
                <h4>{this.state.msg}</h4>
                <div className={cssClasses.ButtonWrapper}>
                    <Link className={cssClasses.BackButton} to="/students">Go Back</Link>
                </div>
                <h2>Edit {this.state.info.firstName}'s details</h2>
                <form>
                    <div id="bio">
                        <h4>Biography</h4>
                        <input 
                            type="text" 
                            name="firstName"  
                            value={this.state.info.firstName}
                            placeholder="First Name"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <input 
                            type="text" 
                            name="lastName" 
                            value={this.state.info.lastName}
                            placeholder="Last Name"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <input 
                            type="email" 
                            name="email" 
                            value={this.state.info.email}
                            placeholder="email"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <input 
                            type="number" 
                            name="phone" 
                            value={this.state.info.phone}
                            placeholder="Phone"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            value={this.state.info.address}
                            placeholder="Address"
                            onChange={(event) => this.userInputHandler(event)}
                        />
                        <select 
                            name="status" 
                            value={this.state.info.status} 
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
                            value={this.state.info.courseId[0]} 
                            onChange={(event) => this.userInputHandler(event)}
                        >   
                        <option value="">Choose The Course</option>
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