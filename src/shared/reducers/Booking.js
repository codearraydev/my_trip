import * as actions from "../constant/Constant";

//set current state
const initialState = {
    dateRange: {},
    roomId: 0,
    noOfRooms: 0
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
            }

        default:
            return state
    }
}