import { TOOGLE_MENU } from './actionTypes';

export const toggleMenu = (status) => {
    return {
        type: TOOGLE_MENU,
        status
    }
}