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
        const {email, phone, firstName, lastName, createdAt} = currentUser;
        console.log('[cureentUser] =>', currentUser)
        return (
            <div>
                <div className={cssClasses.LeftContainer}>
                    <img src={avatar} alt={firstName}/>
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