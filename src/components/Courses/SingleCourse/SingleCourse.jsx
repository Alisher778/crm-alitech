import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cssClasses from './SingleCourse.css';

const singleCourse = (props) => {
    console.log(props)
    const [toggle, setToggle] = useState(false);
    const { 
        id,
        img, 
        price, 
        title,
        deleteCourse, 
        status, 
        duration, 
        startDate, 
        courseLink,
        lessonEnds, 
        lessonStarts, 
        studentsNumber
    } = props;
    return (
        <div className={cssClasses.CourseWrapper}>
            <div className={cssClasses.Left}>
                <img src={img} alt={title}/>
            </div>
            <div className={cssClasses.Right}>
                <h3 className={cssClasses.Title}>{title}</h3>
                <div className={cssClasses.LessonInfo}>
                    <span>{new Date(lessonStarts).toLocaleTimeString()}</span>
                    <span>{new Date(lessonEnds).toLocaleTimeString()}</span>
                    <span>{studentsNumber}</span>
                </div>
                <div className={cssClasses.Details}>
                    <span>{status}</span>
                    <span>{new Date(startDate).toLocaleDateString()}</span>
                    <span>{duration}</span>
                    <span>{price}</span>
                </div>
                <button onClick={() => courseLink(id)}>View</button>
                <div className="CourseActions">
                    <button onClick={() => setToggle(!toggle)} >:</button>
                    <div 
                        className="ActionNames" 
                        style={{display: toggle? 'block' : 'none'}}
                    >
                        <Link to={'/courses/'+id+'/edit'}>Edit</Link>
                        <button onClick={() => deleteCourse(id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default singleCourse;