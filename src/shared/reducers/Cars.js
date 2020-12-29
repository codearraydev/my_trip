import { LOAD_CARS, LOAD_CARS_SUCCESS, LOAD_CARS_FAIL } from "../constant/Constant";

//set current state
const initialState = {
    Tours: [],
    Cars: [],
    filters: {
        car_type: [],
        car_make: [],
        car_class: [],
        features: []
    },
    isGetting: false,
    error: false
}

//export default state
export default function CarsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CARS:
            return {
                ...state,
                isGetting: true,
            }
        
        case 'LOAD_UNFILTERED_CARS':
            return {
                ...state,
                isGetting: false,
                UnFilteredCars: action.payload.Cars,
            }

        case 'LOAD_FILTERED_CARS':
            return {
                ...state,
                isGetting: false,
                Cars: action.payload.Cars,
                UnFilteredCars: action.payload.UnFilteredCars,
                filters: action.payload.filters,
            }
            
        case LOAD_CARS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                Cars: action.data,
            }

        case LOAD_CARS_FAIL:
            return {
                ...state,
                isGetting: false,
                error: true
            }

        default:
            return state
    }
}