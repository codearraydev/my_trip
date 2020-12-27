import { BLOG_LIST, BLOG_LIST_SUCCESS, BLOG_LIST_FAIL } from "../constant/Constant";



//set current state
const initialState = {
    Blogs: [],
    isGetting: false,
    error: false
}

//export default state
export default function blogDetailReducers(state = initialState, action) {
    switch (action.type) {
        case BLOG_LIST:
            return {
                ...state,
                isGetting: true,
                // HotelInf: []
            }

        case BLOG_LIST_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Blogs: action.data,
            }

        case BLOG_LIST_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}