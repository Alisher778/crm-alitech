import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cssClasses from './SingleStudent.css';
import avatar from '../../../assets/imgs/avatar.svg';

const singleStudent = (props) => {
    const [toggle, setToggle] = useState(false)
    const {name, email, phone,checked, id, joined, router: {history, location:{pathname}}} = props;
    return (
        <div className={cssClasses.StudentWrapper}>
           <input 
                type="checkbox" 
                className={cssClasses.Select}
                defaultChecked={checked}
            />
            <img 
                src={avatar} 
                alt="student avatar" 
                className={cssClasses.StudentImg} 
            />
            <div 
                className={cssClasses.Name} 
                onClick={() => history.push(pathname+'/'+id)}
            >
                <span>{name}</span>
                <span className={cssClasses.Email}>{email}</span>
            </div>
            <div className={cssClasses.Phone}>
                <a href={`tel:+${phone}`}>+{phone}</a>
            </div>
            <div className={cssClasses.Status}>
                <span className={cssClasses.Active}>Active</span>
            </div>
            <div className={cssClasses.Course}>
                <span>HTML/CSS</span>
            </div>
            <div className={cssClasses.Joined}>
                <span>{joined}</span>
            </div>
            <div className={cssClasses.StudentActions}>
                <button onClick={() => setToggle(!toggle)}>:</button>
                <div style={{display: toggle?'block':'none'}}>
                    <Link to={'/students/'+props.id+'/edit'}>Edit</Link>
                    <span onClick={() => props.removestudent(props.id)}>Delete</span>
                </div>
            </div>
        </div>
    );
}

export default singleStudent;


