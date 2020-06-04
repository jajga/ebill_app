import { combineReducers } from "redux";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import { connectRouter } from 'connected-react-router'
import repeatCustomerReducer from "./repeatCustomerReducer";
import orderCountReducers from "./orderCountReducers";
import orderDetailsReducers from "./orderDetailsReducers"
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user:userReducer,
    order:orderReducer,
    repeatcustomer: repeatCustomerReducer,
    ordercount: orderCountReducers,
    orderdetails:orderDetailsReducers,
})

export default createRootReducer;