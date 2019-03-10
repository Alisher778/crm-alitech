import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import cssClasses from './StudentProfile.css';
import firebase from '../../../config/firebaseConfig';
import avatar from '../../../assets/imgs/avatar.svg';

const db = firebase.firestore().collection('students');
class StudentProfile extends Component {
    
    render() {
        const userId = this.props.match.params.id;
        const currentUser = this.props.students.find(item => item.id === userId);
        const {email, phone, firstName, lastName, createdAt, address} = currentUser;
        console.log('[cureentUser] =>', currentUser)
        return (
            <div className={cssClasses.ProfileWrapper}>
                <div className={cssClasses.LeftContainer}>
                    <img src={avatar} alt={firstName} className={cssClasses.Avatar}/>
                    <h3>{firstName + ' ' + lastName}</h3>
                    <div className="ContactInformation">
                        <h5>Contact Information</h5>
                        <div>
                            <i>Phone Number:</i>
                            <div><a href={'tel:+'+phone}>+{phone}</a></div>
                        </div>
                        <div>
                            <i>Eamil Address:</i>
                            <div><a href={'mailto:'+email}>{email}</a></div>
                        </div>
                        <div>
                            <i>Address:</i>
                            <div>{address}</div>
                        </div>
                        <div>
                            <i>Joined School:</i>
                            <div>{createdAt}</div>
                        </div>
                    </div>
                </div>
                <div className={cssClasses.RightContainer}></div>
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);