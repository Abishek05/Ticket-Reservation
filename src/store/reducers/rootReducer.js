import authReducer from "./authReducer";
import bookingReducer from "./bookingReducer";
import {combineReducers} from "redux";
import ticketReducer from "./ticketReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    booking: bookingReducer,
    ticket: ticketReducer
})

export default rootReducer





