import { combineReducers, createStore } from 'redux';
import sidebarReducer from './reducers/sidebarReducer';

const reducers = combineReducers({
    sidebar: sidebarReducer
});

const store = createStore(reducers);

export default store;