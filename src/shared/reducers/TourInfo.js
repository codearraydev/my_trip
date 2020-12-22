import { TOUR_DETAILS, TOUR_DETAILS_SUCCESS, TOUR_DETAILS_FAIL } from "../constant/Constant";

//set current state
const initialState = {
    TourInfo: [],
    isGetting: false,
    error: false,
    name: 'haseeb'
}

//export default state
export default function tourInfoReducer(state = initialState, action) {
    switch (action.type) {
        case TOUR_DETAILS:
            return {
                ...state,
                isGetting: true,
                TourInfo: [],
                name: 'nida'
            }

        case TOUR_DETAILS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                TourInfo: action.data,
                name: 'haseeb'
            }

        case TOUR_DETAILS_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}