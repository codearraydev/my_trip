import { PRIVACY_PAGE, PRIVACY_PAGE_SUCCESS, PRIVACY_PAGE_FAIL } from "../constant/Constant";



//set current state
const initialState = {
    Privacy: [],
    isGetting: false,
    error: false
}

//export default state
export default function privacyReadReducers(state = initialState, action) {
    switch (action.type) {
        case PRIVACY_PAGE:
            return {
                ...state,
                isGetting: true,
                // HotelInf: []
            }

        case PRIVACY_PAGE_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Privacy: action.data,
            }

        case PRIVACY_PAGE_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}