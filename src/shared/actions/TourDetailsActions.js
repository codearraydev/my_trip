import { TOUR_DETAILS, TOUR_DETAILS_SUCCESS, TOUR_DETAILS_FAIL } from "../constant/Constant";



export const getDestInformationApi = (dest_id) => {
    return (disptach) => {
        disptach(gettingInfoTour())

        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/destination/gettour/" + dest_id, requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log("Destination Json" + json);
                disptach(gettingInfoTourSuccess(json))
                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(gettingInfoTourFailed(err))
            })


    }
}

const gettingInfoTour = () => {
    return {
        type: TOUR_DETAILS
    }
}


const gettingInfoTourSuccess = (data) => {
    return {
        type: TOUR_DETAILS_SUCCESS,
        data
    }
}

const gettingInfoTourFailed = () => {
    return {
        type: TOUR_DETAILS_FAIL
    }
}