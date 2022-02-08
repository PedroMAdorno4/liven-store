import { actions } from "."

export const login = () => {
    return {
        type: actions.isLogged.login
    }
}

export const logout = () => {
    return {
        type: actions.isLogged.logout
    }
}