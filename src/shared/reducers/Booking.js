import * as actions from "../constant/Constant";

//set current state
const initialState = {
    dateRange: {},
    roomId: 0,
    noOfRooms: 0,
    bookingId: 0,
    data: {}
}

//export default state
export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
        case 'BOOKING_CORE_INFO':
            return {
                ...state,
                roomId: action.room_id,
                dateRange: action.ranges,
                noOfRooms: action.rooms,
            }
        case 'BOOKING_CONFIRMED':
            return {
                ...state,
                bookingId: action.payload.bookingId,
                data: action.payload.info,
            }
        case 'TOUR_BOOKING_CONFIRMED':
            return {
                ...state,
                bookingId: action.payload.bookingId,
                data: action.payload.info,
            }
        case 'TOUR_BOOKING_NOT_CONFIRMED':
            return {
                ...state,
                bookingId: action.payload.bookingId,
                data: action.payload.info,
            }
        default:
            return state
    }
}