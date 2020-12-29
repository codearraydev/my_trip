import { combineReducers } from "redux";
import Hotels from "./Hotels";
import HotelInf from "./HotelInf";
import HotelInfo from "./HotelInfo";
import Destinations from "./Destinations";
import Booking from "./Booking";
import DestInfo from "./DestInfo";
import Tours from "./Tours";
import Cars from "./Cars";
import TourInfo from "./TourInfo";
import HotelData from "./HotelData";
import Blogs from "./Blogs";
import Post from "./Post";
import About from "./About";
import Important from "./Important";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Faq from "./Faq";
const rootReducer = combineReducers({
    Hotels,
    HotelInf,
    HotelInfo,
    Destinations,
    DestInfo,
    Tours,
    TourInfo,
    Booking,
    HotelData,
    Blogs,
    Post,
    About,
    Important,
    Privacy,
    Terms,
    Faq,
    Cars
});

//export default rootReducer;
export default (state, action) =>
    rootReducer(action.type === 'USER_LOGIN_END' ? undefined : state, action);
