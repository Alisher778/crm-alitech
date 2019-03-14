import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebaseConfig';
import cssClasses from './AddStudent.css';
const db = firebase.firestore().collection('students');

class AddStudent extends Component {
    state = { firstName: '', 
              lastName: '', 
              phone: '', 
              email: '', 
              address: '',
              createdAt: Date.now(), 
              updatedAt: Date.now()
            }
    
    userInputHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name]: value});
    }
    formSubmitHandler = (e) => {
        e.preventDefault();
        db.add({...this.state})
            .then(res => {
                console.log('[Successfully saved data]')
            })
            .catch(err => console.log(err))
    }
    render() {
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
                        <button onClick={(event) => this.formSubmitHandler(event)}>Add Student</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddStudent;