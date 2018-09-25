import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './usersReducer';
import { authReducer } from "./authReducer";

const reducer = combineReducers({
    userReducer,
    authReducer,
});



const  store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;