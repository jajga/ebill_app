import { FETCH_ORDER , FETCH_ORDERS } from "../actions/types";

const initialState = {
    orders:[],
    order:{},
    error:{}
}

export default function (state = initialState ,action) {
    //console.log(action.type);
    switch (action.type) {
        case FETCH_ORDERS:
            //console.log("Reducers" ,action.payload.order);
            return {
                ...state,
                orders: action.payload.order,
                error:{}
            }
            default:
                return state;
    }
}