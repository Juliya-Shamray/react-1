import { profileAPI, usersAPI } from "../API/api"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS"


let initialState = {
    posts: [
        { id: 1, message: "Hi! What's up?", likesCount: 15 },
        { id: 2, message: "Wherever you are", likesCount: 20 },
        { id: 3, message: "blblblblb", likesCount: 20 },
        { id: 4, message: "rtzfgargara", likesCount: 20 },
    ],
    profile: null,
    status: ""

}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.addNewPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                addNewPostText: " "
            }

        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photo }
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostActionCreator = (addNewPostText) => ({ type: ADD_POST, addNewPostText })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const setPhotoSuccess = (photo) => ({ type: SET_PHOTO_SUCCESS, photo })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(resp => {
                dispatch(setUserProfile(resp.data));
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(resp => {
                dispatch(setStatus(resp.data));
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }


}

export const savePhoto = (file) => {
    return (dispatch) => {
        profileAPI.savePhoto(file)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(setPhotoSuccess(resp.data.data.photos));
                }
            })
    }
}

export const saveProfile = (profile) => {
    return (dispatch, getState) => {
        const userId = getState().auth.id
        profileAPI.saveProfile(profile)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(getUserProfile(userId));
                }
            })
    }


}
export default profileReducer