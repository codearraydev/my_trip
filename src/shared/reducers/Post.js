import { BLOG_READ, BLOG_READ_SUCCESS, BLOG_READ_FAIL } from "../constant/Constant";



//set current state
const initialState = {
    Post: [],
    isGetting: false,
    error: false
}

//export default state
export default function blogReadReducers(state = initialState, action) {
    switch (action.type) {
        case BLOG_READ:
            return {
                ...state,
                isGetting: true,
                // HotelInf: []
            }

        case BLOG_READ_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Post: action.data,
            }

        case BLOG_READ_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}