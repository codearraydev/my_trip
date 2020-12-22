import { LOAD_HOTELS_DETAIL, LOAD_HOTELS_DETAIL_SUCCESS, LOAD_HOTELS_DETAIL_FAIL } from "../constant/Constant";

//set current state
const initialState = {
    HotelInfo: [],
    isGetting: false,
    error: false,
    name: 'haseeb'
}

//export default state
export default function allergiesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_HOTELS_DETAIL:
            return {
                ...state,
                isGetting: true,
                HotelInfo: [],
                name: 'nida'
            }

        case LOAD_HOTELS_DETAIL_SUCCESS:
            return {
                ...state,
                isGetting: false,
                HotelInfo: action.data,
                name: 'haseeb'
            }

        case LOAD_HOTELS_DETAIL_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}