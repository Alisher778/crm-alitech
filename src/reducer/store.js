import { combineReducers, createStore } from 'redux';
import persistState from 'redux-localstorage'
import sidebarReducer from './reducers/sidebarReducer';
import studentsReducer from './reducers/studentsReducer';

const reducers = combineReducers({
    sidebar: sidebarReducer,
    students: studentsReducer
});

const store = createStore(reducers, persistState());

export default store;