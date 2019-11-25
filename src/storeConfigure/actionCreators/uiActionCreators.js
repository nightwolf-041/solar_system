import * as actionTypes from '../actionTypes/actionTypes'

export const showMenu = () => {
    return {
        type: actionTypes.SHOW_MENU
    }
}

export const hideMenu = () => {
    return {
        type: actionTypes.HIDE_MENU
    }
}