import { TERMS_PAGE, TERMS_PAGE_SUCCESS, TERMS_PAGE_FAIL } from "../constant/Constant";



//set current state
const initialState = {
    Terms: [],
    isGetting: false,
    error: false
}

//export default state
export default function termsReadReducers(state = initialState, action) {
    switch (action.type) {
        case TERMS_PAGE:
            return {
                ...state,
                isGetting: true,
                // HotelInf: []
            }

        case TERMS_PAGE_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Terms: action.data,
            }

        case TERMS_PAGE_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}