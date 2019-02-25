import { TOOGLE_MENU } from '../actions/index';
const initialState = {isOpen: false};

const sidebarReducer = (state=initialState, action) => {
    switch(action.type) {
        case TOOGLE_MENU: 
          return {
            ...state,
            isOpen: action.status
          }
        default: 
         return state;
    }
}

export default sidebarReducer;