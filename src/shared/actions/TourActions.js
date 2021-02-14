import { LOAD_TOUR, LOAD_TOUR_SUCCESS, LOAD_TOUR_FAIL } from "../constant/Constant";



export const fetchToursFromApi = (initialFIlters) => {
    return (disptach) => {
        disptach(getTour())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        //var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: initialFIlters,
            redirect: 'follow'
        };
        fetch("https://www.mytrip.pk/api/public/tours/filters", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log("Tours" + json.result);
                disptach(getTourSuccess(json.result))
                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getTourFailed(err))
            })
    }
}

const getTour = () => {
    return {
        type: LOAD_TOUR
    }
}


const getTourSuccess = (data) => {
    return {
        type: LOAD_TOUR_SUCCESS,
        data
    }
}

const getTourFailed = () => {
    return {
        type: LOAD_TOUR_FAIL
    }
}