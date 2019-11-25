import * as actionTypes from '../actionTypes/actionTypes'
import utility from './utility'

import blanketImage from '../../assets/images/products/product-solar-blanket-reEdit-min.jpg'
import crystalBallImage from '../../assets/images/products/product-solar-crystalBall-min.jpg'
import wallpaperImage from '../../assets/images/products/product-solar-pendants-min.jpg'

const initialState = {
    products: {
        blancket: {
            id: 1,
            image: blanketImage,
            count: 0,
            name: 'پتوی طرح منظومه',
            desc: 'تهیه شده از بهترین الیاف با رنگ ثابت',
            uiPrice: '80,000',
            statePrice: 80000,
            statePriceCounter: 0
        },
        cristalBall: {
            id: 2,
            image: crystalBallImage,
            count: 0,
            name: 'گوی طرح منظومه',
            desc: 'از جنس نانو، نشکن و ضد خش',
            uiPrice: '35,000',
            statePrice: 35000,
            statePriceCounter: 0
        },
        pendants: {
            id: 3,
            image: wallpaperImage,
            count: 0,
            name: 'آویز طرح منظومه',
            desc: 'نصب بسیار آسان و قابل شستشو',
            uiPrice: '25,000',
            statePrice: 25000,
            statePriceCounter: 0
        }
    },
    totalPrices: 0,
    discountTotalPrices: 0
}

const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {

        // case increment
        case actionTypes.INC_BTN:
            const productCount = state.products[action.productName].count
            let updatedProductCount = productCount + 1
            let updatedProducts = {...state.products }
            updatedProducts[action.productName].count = updatedProductCount

            const productprice = state.products[action.productName].statePrice
            const productpriceCounter = state.products[action.productName].statePriceCounter
            const updatedProductPrice = productpriceCounter + productprice
            updatedProducts[action.productName].statePriceCounter = updatedProductPrice

            const totalPrices = state.totalPrices
            let updatedTotalPrices = totalPrices + productprice

            const discountTotalPrices = state.discountTotalPrices
            let updatedDiscountTotalPrices = discountTotalPrices + productprice

            return utility(state, {
                products: updatedProducts,
                totalPrices: updatedTotalPrices,
                discountTotalPrices: updatedDiscountTotalPrices
            })


            // case decrement
        case actionTypes.DEC_BTN:
            const decProductCount = state.products[action.productName].count
            let updatedDecProductCount = decProductCount - 1
            const decProductprice = state.products[action.productName].statePrice
            const decProductpriceCounter = state.products[action.productName].statePriceCounter
            const decUpdatedProductPrice = decProductpriceCounter - decProductprice

            if (state.products[action.productName].count < 1) {
                const decUpdatedproductsZero = {...state.products }
                decUpdatedproductsZero[action.productName].count = 0
                decUpdatedproductsZero[action.productName].statePriceCounter = 0

                return utility(state, {
                    products: decUpdatedproductsZero,
                    totalPrices: 0,
                    discountTotalPrices: 0
                })

            } else {
                const decUpdatedproducts = {...state.products }
                decUpdatedproducts[action.productName].count = updatedDecProductCount
                decUpdatedproducts[action.productName].statePriceCounter = decUpdatedProductPrice

                const decTotalPrices = state.totalPrices
                let updatedDecTotalPrices = decTotalPrices - decProductprice

                const decDiscountTotalPrices = state.discountTotalPrices
                let updatedDecDiscountTotalPrices = decDiscountTotalPrices - decProductprice

                return utility(state, {
                    products: decUpdatedproducts,
                    totalPrices: updatedDecTotalPrices,
                    discountTotalPrices: updatedDecDiscountTotalPrices
                })
            }


        case actionTypes.DEL_PRODUCT:
            let pupdatedProducts = {...state.products }
            const productIndex = Object.keys(pupdatedProducts).find(pro => {
                return pupdatedProducts[pro].id === action.id
            })
            pupdatedProducts[productIndex].count = 0

            let delProductPriceCounter = pupdatedProducts[productIndex].statePriceCounter

            let delTotalPrices = state.totalPrices
            let delDiscountTotalPrices = state.discountTotalPrices
            let updatedDelTotalPrices = delTotalPrices - delProductPriceCounter
            let updatedDelDiscountTotalPrices = delDiscountTotalPrices - delProductPriceCounter

            pupdatedProducts[productIndex].statePriceCounter = 0

            return utility(state, {
                products: pupdatedProducts,
                totalPrices: updatedDelTotalPrices,
                discountTotalPrices: updatedDelDiscountTotalPrices
            })


        case actionTypes.DISCOUNT:
            let disDiscountTotalPrices = state.discountTotalPrices
            let updatedDisDiscountTotalPrice = disDiscountTotalPrices * (90 / 100)

            return utility(state, { discountTotalPrices: updatedDisDiscountTotalPrice })


        default:
            return state;
    }
}

export default purchaseReducer