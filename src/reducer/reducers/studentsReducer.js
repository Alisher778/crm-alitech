import { FETCH_STUDENTS } from '../actions/actionTypes';
const initialState = {students: []}

const studentsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_STUDENTS:
         return {...state, students: action.students};
        default: 
            return state;
    }
}

export default studentsReducer;
