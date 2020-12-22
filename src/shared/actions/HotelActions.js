import { LOAD_HOTELS, LOAD_HOTELS_SUCCESS, LOAD_HOTELS_FAIL } from "../constant/Constant";



export const fetchHotelsFromApi = () => {
    return (disptach) => {
        disptach(getHotels())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://www.mytrip.pk/api/public/hotel/details", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                disptach(getHotelsSuccess(json.result))


                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getHotelFailed(err))
            })


    }
}

const getHotels = () => {
    return {
        type: LOAD_HOTELS
    }
}


const getHotelsSuccess = (data) => {
    return {
        type: LOAD_HOTELS_SUCCESS,
        data
    }
}

const getHotelFailed = () => {
    return {
        type: LOAD_HOTELS_FAIL
    }
}