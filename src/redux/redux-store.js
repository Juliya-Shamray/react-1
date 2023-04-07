import AuthReducer from "./Auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer";

const { legacy_createStore, combineReducers, applyMiddleware, compose } = require("redux");


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window._store = store

export default store