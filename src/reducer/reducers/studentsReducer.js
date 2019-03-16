import { FETCH_STUDENTS, REMOVE_STUDENT } from '../actions/actionTypes';
const initialState = {students: []}

const studentsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_STUDENTS: {
            return {...state, students: action.students};
        }
        case REMOVE_STUDENT: {
            console.log('Ura', state.students.filter((item) => item.id !== action.id), state)
            return {    
                ...state, 
                students: state.students.filter((item) => item.id !== action.id)
            }
        }
        default: {
            return state;
        }
    }
}

export default studentsReducer;
