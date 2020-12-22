import { DEST_DETAILS, DEST_DETAILS_SUCCESS, DEST_DETAILS_FAIL } from "../constant/Constant";

//set current state
const initialState = {
    DestInfo: [],
    isGetting: false,
    error: false,
    name: 'haseeb'
}

//export default state
export default function destInfoReducer(state = initialState, action) {
    switch (action.type) {
        case DEST_DETAILS:
            return {
                ...state,
                isGetting: true,
                DestInfo: [],
                name: 'nida'
            }

        case DEST_DETAILS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                DestInfo: action.data,
                name: 'haseeb'
            }

        case DEST_DETAILS_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}