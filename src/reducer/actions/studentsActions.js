import { FETCH_STUDENTS } from './actionTypes';

export const getStudentsList = (data) => {
    return {
        type: FETCH_STUDENTS,
        students: data
    }
}