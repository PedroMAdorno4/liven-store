import { actions } from "../actions";

const initialState = {
    products: [],
    coupon: ''
}

const cartReducer = (state = initialState, action) => {
    function removeProductFromState(id) {
        return { ...state, products: state.products.filter(product => product.id !== id) }
    }
    switch (action.type) {
        case actions.cart.addProduct:
            return { ...state, products: [...state.products, { id: action.payload, quantity: 1 }] }

        case actions.cart.removeProduct:
            return removeProductFromState(action.payload)

        case actions.cart.incrementQuantity:
        case actions.cart.decrementQuantity:
            if (state.products.find(item => item.id === action.payload).quantity <= 1 && action.type === actions.cart.decrementQuantity) {
                return removeProductFromState(action.payload)
            }

            let products = state.products.map(item => {
                if (item.id !== action.payload) {
                    return item
                }

                let offset = 0
                if (action.type === actions.cart.incrementQuantity) {
                    offset = 1
                } else {
                    offset = -1
                }

                return {
                    ...item,
                    quantity: item.quantity + offset
                }
            })

            return {
                ...state,
                products
            }

        case 'CLEAR':
            return [];
        default:
            return state;
    }
};

export default cartReducer;