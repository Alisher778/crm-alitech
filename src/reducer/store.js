import { combineReducers, createStore } from 'redux';
import sidebarReducer from './reducers/sidebarReducer';
import studentsReducer from './reducers/studentsReducer';

const reducers = combineReducers({
    sidebar: sidebarReducer,
    students: studentsReducer
});

const store = createStore(reducers);

export default store;