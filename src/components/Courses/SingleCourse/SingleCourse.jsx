import React from 'react';
import cssClasses from './SingleCourse.css';

const singleCourse = (props) => {
    const { 
        id,
        img, 
        price, 
        title, 
        status, 
        duration, 
        startDate, 
        courseLink,
        lessonEnds, 
        lessonStarts, 
        studentsNumber
    } = props;
    console.log(id)
    return (
        <div className={cssClasses.CourseWrapper} onClick={() => courseLink(id)}>
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
                    <span>{startDate}</span>
                    <span>{duration}</span>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    )
} 

export default singleCourse;