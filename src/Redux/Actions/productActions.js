import { FETCH_PRODUCT_FAILUAR, FETCH_PRODUCT_REQUAST, FETCH_PRODUCT_SUCCESS } from "../ActionTypes/productActionTypes"
import axios from "axios"

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductRequast)
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                const products = res.json()
                dispatch(fetchProductSuccess(products))
            })
            .catch(error => {
                const errorMsg = error.massage
                dispatch(fetchProductFailuar(errorMsg))
            })
    }
}

export const fetchProductRequast = () => {
    return {
        type: FETCH_PRODUCT_REQUAST
    }
}

export const fetchProductSuccess = (products) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: products
    }
}

export const fetchProductFailuar = (error) => {
    return {
        type: FETCH_PRODUCT_FAILUAR,
        payload: error
    }
}