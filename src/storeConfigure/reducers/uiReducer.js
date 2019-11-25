import * as actionTypes from '../actionTypes/actionTypes'
import utility from './utility'

const initialState = {
    showMenu: false
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SHOW_MENU:
            return utility(state, { showMenu: true })

        case actionTypes.HIDE_MENU:
            return utility(state, { showMenu: false })


        default:
            return state;
    }
}

export default uiReducer;