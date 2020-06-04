import { FETCH_USER , LOGIN_ERR,API_HOST } from './types';
import axios from "axios";

    // Add a request interceptor
    axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        return config;
    },
    error => {
        Promise.reject(error)
    });

    


export const validateUser = (post) => dispatch => {
    let postData = post;

    axios.post(API_HOST+'/admin/login',postData)
        .then((res) => dispatch({
            type: FETCH_USER,
            payload: res.data
        }))
        .catch((err) => {
            dispatch({
                type: LOGIN_ERR,
                payload: err
            })
            
            console.log("AXIOS ERROR: ", err);
        })
};






