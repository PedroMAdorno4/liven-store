import { actions } from "."

export const addProduct = (product) => {
    return {
        type: actions.cart.addProduct,
        payload: product
    }
}

export const incrementQuantity = (id) => {
    return {
        type: actions.cart.incrementQuantity,
        payload: id
    }
}

export const removeProduct = (id) => {
    return {
        type: actions.cart.removeProduct,
        payload: id
    }
}

export const decrementQuantity = (id) => {
    return {
        type: actions.cart.decrementQuantity,
        payload: id
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}