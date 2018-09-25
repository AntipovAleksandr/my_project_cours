import axios from 'axios';

import {SIGN_IN, SIGN_IN_ERROR, SIGN_UP, SIGN_UP_ERROR, SIGN_OUT, baseUrl} from "../constants/usersConstants";
import { storageWorker } from '../helpers/authHeader';

const  initialAuthState ={
    token: null,
    errorMessage: '',
};

export const authReducer = (state = initialAuthState , action) =>{
    switch (action.type) {
        case SIGN_IN:
            return{...state, token: action.payload, errorMessage: '' };
        case SIGN_IN_ERROR:
            return{...state, token: action.payload};
        case SIGN_UP:
            return{...state, token: action.payload, errorMessage:'' };
        case SIGN_UP_ERROR:
            return{...state, token: action.payload};
        case SIGN_OUT:
            return initialAuthState;
        default:
            return state;
    }
};

export const userSignIn = ({email, password}, history) => dispatch => {
    axios
        .put(`${baseUrl}/users/api/auth/login`, {
            e_mail: email,
            password,
        })
        .then(res => {
            dispatch({
                type: SIGN_IN,
                payload: res.data.token,
            });
            history.replace('/users');
        })
        .catch(error => {
            dispatch({
                type: SIGN_IN_ERROR,
                payload: error.data.message,
            });
        });
};

export const userSignUp = ({email, password, confirmPassword }, history) => dispatch => {
    axios
        .post(`${baseUrl}/users/api/auth/signup`, {
            e_mail: email,
            password,
            confirm_password: confirmPassword,
        })
        .then(res => {
            dispatch({
                type: SIGN_UP,
                payload: res.data.token,
            });
            history.replace('/users');
        })
        .catch(error => {
            dispatch({
                type: SIGN_UP_ERROR,
                payload: error.data.message,
            });
        });
};

// export const userSignOut = () =>{
//     storageWorker().clearItem(token);
//
//     return {
//         type: SIGN_OUT,
//     };
//
// }