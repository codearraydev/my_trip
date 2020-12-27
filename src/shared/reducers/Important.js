import { IMPORANT_PAGE, IMPORANT_PAGE_SUCCESS, IMPORANT_PAGE_FAIL } from "../constant/Constant";



//set current state
const initialState = {
    Important: [],
    isGetting: false,
    error: false
}

//export default state
export default function importantReadReducers(state = initialState, action) {
    switch (action.type) {
        case IMPORANT_PAGE:
            return {
                ...state,
                isGetting: true,
                // HotelInf: []
            }

        case IMPORANT_PAGE_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Important: action.data,
            }

        case IMPORANT_PAGE_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}