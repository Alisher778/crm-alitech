import { FETCH_COURSES, REMOVE_COURSE } from './actionTypes';

export const fetchCourses = (data) => {
    return {
        type: FETCH_COURSES,
        courses: data
    }
}

export const removeCourse = (id) => {
    return {
        type: REMOVE_COURSE,
        id
    }
}