import { FETCH_REPEATCUSTOMERS, API_HOST } from './types';

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



export const getRepeatCustomersCount = (post) => dispatch => {
    let postData = post;
    //console.log("Here");
    axios.post(API_HOST+'/order/getrepeatcustomer',postData)
        .then((res) => dispatch({
            type: FETCH_REPEATCUSTOMERS,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
};
