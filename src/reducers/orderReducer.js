import { FETCH_ORDER , FETCH_ORDERS } from "../actions/types";

const initialState = {
    orders:[],
    order:{},
    error:{}
}

export default function (state = initialState ,action) {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload.order,
                error:{}
            }
            default:
                return state;
    }
}