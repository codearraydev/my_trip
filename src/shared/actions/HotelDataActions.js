import { SAVE_BOOKING_STATE, LOAD_BOOKING_STATE } from "../constant/Constant";



export const setHotelData = (hotelName, hotelCity, roomType, roomPrice) => {
    
    return (disptach) => {
        disptach(setBookingData)
        disptach(postHotelData(hotelName, hotelCity, roomType, roomPrice))
    }
}




const setBookingData = () => {
    return {
        type: SAVE_BOOKING_STATE
    }
}

const postHotelData = (hotelName, hotelCity, roomType, roomPrice) => {
    return {
        type: LOAD_BOOKING_STATE,
        hotelName,
        hotelCity,
        roomType,
        roomPrice
    }
}

