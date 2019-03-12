import { combineReducers, createStore } from 'redux';
import persistState from 'redux-localstorage'
import sidebarReducer from './reducers/sidebarReducer';
import studentsReducer from './reducers/studentsReducer';
import coursesReducer from './reducers/coursesReducer';

const reducers = combineReducers({
    sidebar: sidebarReducer,
    students: studentsReducer,
    courses: coursesReducer,
});

const store = createStore(reducers, persistState());

export default store;