import {FETCH_ORDER,ORDER_ERR } from "../actions/types";

const initialState = {
    order:[],
    error:{}
}

export default function (state = initialState ,action) {
    switch (action.type) {
        case FETCH_ORDER:
        //console.log(action.payload);
        return {
            ...state,
            order: action.payload,
            error:{}
        }
        case ORDER_ERR:
        return {
            ...state,
            error: action.payload.response.data.errMsg,
            order:{}
        }
        default:
            return state;
    }
}