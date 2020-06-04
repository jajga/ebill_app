import { GET_ORDERDETAILS } from "../actions/types";

const initialState = {
    orderdetails:[],
    orderdetail:{},
    error:{}
}

export default function (state = initialState ,action) {
    //console.log(action.type);
    switch (action.type) {
        case GET_ORDERDETAILS:
            //console.log(action.payload.order);
            return {
                ...state,
                orderdetails: action.payload.order,
                error:{}
            }
            default:
                return state;
    }
}