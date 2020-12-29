import * as actions from "../constant/Constant";

export const fetchDestFromApi = (initialData) => {
    return (dispatch) => {
        dispatch(getDestination())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        //var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: initialData,
            redirect: 'follow'
        };

        console.log(requestOptions)
        fetch("https://mytrip.pk/api/public/destination/details/undefined", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log("Destination" + json.result);
                dispatch(getDestinationSuccess(json.result))
                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                dispatch(getDestinationFailed(err))
            })
    }
}

const getDestination = () => {
    return {
        type: actions.LOAD_DESTINATIONS
    }
}

const getDestinationSuccess = (data) => {
    return {
        type: actions.LOAD_DESTINATIONS_SUCCESS,
        data
    }
}

const getDestinationFailed = () => {
    return {
        type: actions.LOAD_DESTINATIONS_FAIL
    }
}