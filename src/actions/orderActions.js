import { FETCH_ORDERS,API_HOST } from './types';
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

export const getOrdersCount = (post) => dispatch => {
    let postData = post;

    axios.post(API_HOST+'/order/getordercountdatewise',postData)
        .then((res) => dispatch({
            type: FETCH_ORDERS,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
};






