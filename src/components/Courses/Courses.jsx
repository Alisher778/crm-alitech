import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Courses extends Component {
    render() {
        return (
            <div>
                 <Link to="/courses/add-course">Add Course</Link>
                <h1>Courses</h1>
            </div>
        );
    }
}

export default Courses;