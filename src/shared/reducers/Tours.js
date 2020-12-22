import { LOAD_TOUR, LOAD_TOUR_SUCCESS, LOAD_TOUR_FAIL } from "../constant/Constant";



//set current state
const initialState = {
    Tours: [],
    isGetting: false,
    error: false
}

//export default state
export default function tourDetailReducers(state = initialState, action) {
    switch (action.type) {
        case LOAD_TOUR:
            return {
                ...state,
                isGetting: true,
                // HotelInf: []
            }

        case LOAD_TOUR_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Tours: action.data,
            }

        case LOAD_TOUR_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}