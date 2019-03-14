import { FETCH_COURSES } from '../actions';
const initialState = {courses: []};

const coursesReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_COURSES: {
            return {
                ...state,
                courses: action.courses
            }
        }
        default: 
            return state;
    }
}

export default coursesReducer;