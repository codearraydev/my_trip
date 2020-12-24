import { combineReducers } from "redux";
import Hotels from "./Hotels";
import HotelInf from "./HotelInf";
import HotelInfo from "./HotelInfo";
import Destinations from "./Destinations";
import Booking from "./Booking";
import DestInfo from "./DestInfo";
import Tours from "./Tours";
import TourInfo from "./TourInfo";
import HotelData from "./HotelData";
const rootReducer = combineReducers({
    Hotels,
    HotelInf,
    HotelInfo,
    Destinations,
    DestInfo,
    Tours,
    TourInfo,
    Booking,
    HotelData
});

//export default rootReducer;
export default (state, action) =>
    rootReducer(action.type === 'USER_LOGIN_END' ? undefined : state, action);
