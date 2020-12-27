import { ABOUT_PAGE, ABOUT_PAGE_SUCCESS, ABOUT_PAGE_FAIL } from "../constant/Constant";



//set current state
const initialState = {
    About: [],
    isGetting: false,
    error: false
}

//export default state
export default function aboutReadReducers(state = initialState, action) {
    switch (action.type) {
        case ABOUT_PAGE:
            return {
                ...state,
                isGetting: true,
                // HotelInf: []
            }

        case ABOUT_PAGE_SUCCESS:
            return {
                ...state,
                isGetting: false,
                About: action.data,
            }

        case ABOUT_PAGE_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}