import { actions } from "../actions";

const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case actions.isLogged.login:
            return true;
        case actions.isLogged.logout:
            return false;
        default:
            return state;
    }
};

export default loggedReducer;