import { GET_ORDERDETAILS,API_HOST } from './types';
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

export const getOrderDetails = (post) => dispatch => {
    let postData = post;

    axios.post(API_HOST+'/order/getallorders',postData)
        .then((res) => dispatch({
            type: GET_ORDERDETAILS,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
};






