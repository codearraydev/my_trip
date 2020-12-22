import { LOAD_HOTELS, LOAD_HOTELS_SUCCESS, LOAD_HOTELS_FAIL } from "../constant/Constant";


//set current state
const initialState = {
    Hotels: [],
    isGetting: false,
    error: false,
    name: 'haseeb'
}

//export default state
export default function hotelReducers(state = initialState, action) {
    switch (action.type) {
        case LOAD_HOTELS:
            return {
                ...state,
                isGetting: true,
                name: 'nida'
            }

        case LOAD_HOTELS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Hotels: action.data,
                name: 'haseeb'
            }

        case LOAD_HOTELS_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}