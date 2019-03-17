import { FETCH_COURSES, REMOVE_COURSE } from '../actions';
const initialState = {courses: []};

const coursesReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_COURSES: {
            return {
                ...state,
                courses: action.courses
            }
        }
        case REMOVE_COURSE: {
            return {    
                ...state, 
                courses: state.courses.filter((item) => item.id !== action.id)
            }
        }
        default: 
            return state;
    }
}

export default coursesReducer;