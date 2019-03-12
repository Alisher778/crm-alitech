import { FETCH_COURSES } from './actionTypes';

export const fetchCourses = (data) => {
    return {
        type: FETCH_COURSES,
        courses: data
    }
}
