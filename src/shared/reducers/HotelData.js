import { SAVE_BOOKING_STATE, LOAD_BOOKING_STATE } from "../constant/Constant";


//set current state  hotelName, hotelCity, roomType, roomPrice
const initialState = {
    HotelName: 'Hello World',
    HotelCity: '',
    RoomType: '',
    RoomPrice: '',
    HotelID: ''
}

//export default state
export default function allergiesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_BOOKING_STATE:
            return {
                ...state,
                HotelName: ''
                // HotelName: '',
                // HotelCity: '',
                // RoomType: '',
                // RoomPrice: '',
                // HotelID: ''
            }

        case SAVE_BOOKING_STATE:
            return {
                ...state,
                isGetting: false,
                HotelName: action.hotelName
            }

        // case LOAD_HOTELS_DETAIL_FAIL:
        //     return {
        //         ...state,
        //         isGetting: false,
        //         error: true
        //     }

        default:
            return state
    }
}