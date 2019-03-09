import { STUDENTS_LIST } from './actionTypes';

export const getStudentsList = (data) => {
    return {
        type: STUDENTS_LIST,
        students: data
    }
}