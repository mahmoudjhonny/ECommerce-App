import * as actionTypes from "../ActionTypes/productActionTypes"
import axios from "axios"

export const fetchProductRequast = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_REQUAST
    }
}

export const fetchProductSuccess = products => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        payload: products
    }
}

export const fetchProductFailuar = error => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAILUAR,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductRequast())
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                const products = res.data
                console.log(products)
                dispatch(fetchProductSuccess(products))
            })
            .catch(error => {
                dispatch(fetchProductFailuar(error.massage))
            })
    }
}