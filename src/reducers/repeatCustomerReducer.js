import { FETCH_REPEATCUSTOMER,FETCH_REPEATCUSTOMERS } from "../actions/types";

const initialState = {
    repeatcustomers:[],
    repeatcustomer:{},
    error:{}
}

export default function (state = initialState ,action) {
    //console.log(action.type);
    switch (action.type) {
        case FETCH_REPEATCUSTOMERS:
            //console.log(action.payload.order);
            return {
                ...state,
                repeatcustomers: action.payload.order,
                error:{}
            }
            default:
                return state;
    }
}