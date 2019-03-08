import { STUDENTS_LIST } from '../actions/actionTypes';
const initialState = {students: []}

const studentsReducer = (state=initialState, action) => {
    switch(action.type) {
        case STUDENTS_LIST:
         return {...state, students: action.students};
        default: 
            return state;
    }
}

export default studentsReducer;
