import { getAuthUserData } from "./Auth-reducer"


const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS"


let initialState = {
    initialazed: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialazed: true,
            }

        default:
            return state
    }
}
export const initialazedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise]).then(() => {
        dispatch(initialazedSuccess())
    })

}




export default appReducer