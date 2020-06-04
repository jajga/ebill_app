import { GET_ORDERCOUNT } from "../actions/types";

const initialState = {
    ordercounts:[],
    ordercount:{},
    error:{}
}

export default function (state = initialState ,action) {
    console.log(action.type);
    switch (action.type) {
        case GET_ORDERCOUNT:
            console.log(action.payload.order);
            return {
                ...state,
                ordercounts: action.payload.order,
                error:{}
            }
            default:
                return state;
    }
}