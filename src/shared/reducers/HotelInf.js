import { LOAD_HOTELS_DETAIL, LOAD_HOTELS_DETAIL_SUCCESS, LOAD_HOTELS_DETAIL_FAIL } from "../constant/Constant";


//set current state
const initialState = {
    HotelInf: [],
    isLoadingHotelInf: false,
    error: false
}

//export default state
export default function hotelDetailReducers(state = initialState, action) {
    switch (action.type) {
        case LOAD_HOTELS_DETAIL:
            return {
                ...state,
                isLoadingHotelInf: true,
                HotelInf: []
            }

        case LOAD_HOTELS_DETAIL_SUCCESS:
            return {
                ...state,
                isLoadingHotelInf: false,
                HotelInf: action.data,
            }

        case LOAD_HOTELS_DETAIL_FAIL:
            return {
                ...state,
                isLoadingHotelInf: false,
                error: true
            }

        default:
            return state
    }
}