import { STUDENTS_LIST } from './actionTypes';

export const studentsList = (data) => {
    return {
        type: STUDENTS_LIST,
        students: data
    }
}