import { FETCH_STUDENTS, REMOVE_STUDENT } from './actionTypes';

export const getStudentsList = (data) => {
    return {
        type: FETCH_STUDENTS,
        students: data
    }
}

export const removeStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        id
    }
}