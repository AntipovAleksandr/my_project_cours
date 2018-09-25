import React from 'react';
import axios from 'axios';

import { SET_USERS, SET_USERS_ERROR, userBaseUrl } from "../constants/usersConstants";


const initialState = {
    isAuthenticated: true,
    users: [],
    errorMessage: '',
};

export  const userReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.payload],
                errorMessage: ''
            };
        case SET_USERS_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

const setUsers = () => dispatch => {
    axios
        .get(userBaseUrl)
        .then(res =>
            dispatch({
                type: SET_USERS,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch({
                type: SET_USERS_ERROR,
                payload: err.message,
            })
        );
};

export default setUsers;
