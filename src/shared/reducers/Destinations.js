import { LOAD_DESTINATIONS, LOAD_DESTINATIONS_SUCCESS, LOAD_DESTINATIONS_FAIL } from "../constant/Constant";



//set current state
const initialState = {
    Destinations: [],
    isGetting: false,
    error: false
}

//export default state
export default function hotelDetailReducers(state = initialState, action) {
    switch (action.type) {
        case LOAD_DESTINATIONS:
            return {
                ...state,
                isGetting: true,
               // HotelInf: []
            }

        case LOAD_DESTINATIONS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Destinations: action.data,
            }

        case LOAD_DESTINATIONS_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}