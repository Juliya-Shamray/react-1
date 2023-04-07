import dialogsReducer from "./dialogs-reducer copy"
import profileReducer from "./profile-reducer"


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi! What's up?", likesCount: 15 },
                { id: 2, message: "Wherever you are", likesCount: 20 },
                { id: 3, message: "blblblblb", likesCount: 20 },
                { id: 4, message: "rtzfgargara", likesCount: 20 },
            ],
            newPostText: "vasa"

        },
        dialogPage: {
            messages: [
                { id: 1, message: "hi" },
                { id: 2, message: "Yo, my bestie" },
                { id: 3, message: "What's up?" },
            ],

            dialogs: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Oleg" },
                { id: 3, name: "Vasya" },
                { id: 4, name: "Petya" },
                { id: 5, name: "Elena" },
                { id: 6, name: "Juliia" }
            ],
            newMessageText: ""
        }

    },
    getState() {
        return this._state
    },


    _callSubscriber() {
        console.log("state was changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },



    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state)
    }

}


export default store