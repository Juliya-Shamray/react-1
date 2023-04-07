
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, { id: 7, message: body }]
            }
        default:
            return state
    }
}



export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer