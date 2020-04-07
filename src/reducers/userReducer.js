import { FETCH_USER , LOGIN_ERR } from "../actions/types";

const initialState = {
    user:{},
    error:{}
}

export default function (state = initialState ,action) {
    switch (action.type) {
        case FETCH_USER:
        //console.log(action.payload);
            return {
                ...state,
                user: action.payload,
                error:{}
            }
        case LOGIN_ERR:
            return {
                ...state,
                error: action.payload.response.data.errMsg,
                user:{}
            }
        default:
            return state;
    }
}