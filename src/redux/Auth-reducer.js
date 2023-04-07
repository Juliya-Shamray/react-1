import { stopSubmit } from "redux-form"
import { authAPI } from "../API/api"

const SET_USER_DATA = "SET_USER_DATA"


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}
export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })

export const getAuthUserData = () => (dispatch) => {

    return (authAPI.me()
        .then(resp => {
            if (resp.data.resultCode === 0) {
                let { id, login, email } = resp.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
    )
}


export const loginAC = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = resp.data.messages.length > 0 ? resp.data.messages[0] : "Common error";
                dispatch(stopSubmit("login", { _error: message }))
            }
        })
}


export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })

}

export default AuthReducer