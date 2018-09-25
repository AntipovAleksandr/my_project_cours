import axios from 'axios';

import { SET_POSTS, SET_POSTS_ERROR } from "../constants/usersConstants";
import { baseUrl} from "../constants/usersConstants";

export const setPosts = (id) => dispatch =>
    axios
        .get(`${baseUrl}/posts?userId=${id}`)
        .then(({data}) => {
            dispatch({
                type: SET_POSTS,
                posts: data
            });
            console.log("success"  )

            localStorage.setItem('posts', JSON.stringify(data));

        })
        .catch((err) => {
            dispatch({
                type: SET_POSTS_ERROR,
                payload: err.message,
            })
            console.log(err)
        });