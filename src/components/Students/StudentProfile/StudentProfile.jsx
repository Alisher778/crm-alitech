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
        const {email, phone, firstName, lastName, createdAt, address, status} = currentUser;
        console.log('[cureentUser] =>', currentUser)
        return (
            <div className={cssClasses.ProfileWrapper}>
                <div className={cssClasses.ButtonWrapper}>
                    <Link className={cssClasses.BackButton} to="/students">Go Back</Link>
                </div>
                <div className={cssClasses.LeftContainer}>
                    <div className={cssClasses.BasicInfo}>
                        <img src={avatar} alt={firstName} className={cssClasses.Avatar}/>
                        <h3>{firstName + ' ' + lastName}</h3>
                        <div 
                            className={status === 'active'?cssClasses.ActiveStatus:cssClasses.InactiveStatus}>
                            {status}
                        </div>
                    </div>
                    <div className={cssClasses.ContactInformation}>
                        <div>
                            <span>Phone Number:</span>
                            <p><a href={'tel:+'+phone}>+{phone}</a></p>
                        </div>
                        <div>
                            <span>Eamil Address:</span>
                            <p><a href={'mailto:'+email}>{email}</a></p>
                        </div>
                        <div>
                            <span>Address:</span>
                            <p>{address}</p>
                        </div>
                        <div>
                            <span>Joined School:</span>
                            <div>{createdAt}</div>
                        </div>
                    </div>
                </div>
                <div className={cssClasses.RightContainer}>
                
                </div>
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