import { LOAD_DESTINATIONS, LOAD_DESTINATIONS_SUCCESS, LOAD_DESTINATIONS_FAIL } from "../constant/Constant";



export const fetchDestFromApi = () => {
    return (disptach) => {
        disptach(getDestination())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        //var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/destination/details/undefined", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log("Destination" + json.result);
                disptach(getDestinationSuccess(json.result))
                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getDestinationFailed(err))
            })
    }
}

const getDestination = () => {
    return {
        type: LOAD_DESTINATIONS
    }
}


const getDestinationSuccess = (data) => {
    return {
        type: LOAD_DESTINATIONS_SUCCESS,
        data
    }
}

const getDestinationFailed = () => {
    return {
        type: LOAD_DESTINATIONS_FAIL
    }
}