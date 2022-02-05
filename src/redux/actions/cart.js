export const addProduct = (id) => {
    return {
        type: 'ADD_PRODUCT',
        payload: id
    }
}

export const incrementQuantity = (id) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: id
    }
}

export const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: id
    }
}

export const decrementQuantity = (id) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: id
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}