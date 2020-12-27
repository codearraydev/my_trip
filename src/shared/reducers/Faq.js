import { LOAD_FAQ, LOAD_FAQ_SUCCESS, LOAD_FAQ_FAIL } from "../constant/Constant";

//set current state
const initialState = {
    Faq: [],
    isGetting: false,
    error: false,
    name: 'haseeb'
}

//export default state
export default function faqInfoReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_FAQ:
            return {
                ...state,
                isGetting: true,
                Faq: [],
                name: 'nida'
            }

        case LOAD_FAQ_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Faq: action.data,
                name: 'haseeb'
            }

        case LOAD_FAQ_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}