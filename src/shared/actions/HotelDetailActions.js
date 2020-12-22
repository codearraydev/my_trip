import { LOAD_HOTELS_DETAIL, LOAD_HOTELS_DETAIL_SUCCESS, LOAD_HOTELS_DETAIL_FAIL } from "../constant/Constant";



export const getHotelInformationApi = (hotel_id) => {
    return (disptach) => {
        disptach(gettingInfoHotel())

        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://www.mytrip.pk/api/public/hotel/get/" + hotel_id, requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                disptach(gettingInfoHotelSuccess(json))


                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(gettingInfoHotelSuccessFailed(err))
            })


    }
}

const gettingInfoHotel = () => {
    return {
        type: LOAD_HOTELS_DETAIL
    }
}


const gettingInfoHotelSuccess = (data) => {
    return {
        type: LOAD_HOTELS_DETAIL_SUCCESS,
        data
    }
}

const gettingInfoHotelSuccessFailed = () => {
    return {
        type: LOAD_HOTELS_DETAIL_FAIL
    }
}