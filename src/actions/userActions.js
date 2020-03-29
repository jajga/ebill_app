import { FETCH_USER , LOGIN_ERR } from './types';
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

    const API_HOST = 'http://18.218.31.79:82/api';


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






