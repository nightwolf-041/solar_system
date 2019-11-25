import * as actionTypes from '../actionTypes/actionTypes'

export const increment = (productName) => {
    return {
        type: actionTypes.INC_BTN,
        productName
    }
}

export const decrement = (productName) => {
    return {
        type: actionTypes.DEC_BTN,
        productName
    }
}

export const deleteProduct = (id, productName) => {
    return {
        type: actionTypes.DEL_PRODUCT,
        id,
        productName
    }
}

export const discount = (value) => {
    return {
        type: actionTypes.DISCOUNT,
        value
    }
}