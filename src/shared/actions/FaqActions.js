import { LOAD_FAQ, LOAD_FAQ_SUCCESS, LOAD_FAQ_FAIL } from "../constant/Constant";

export const fetchFaqFromApi = () => {
    return (dispatch) => {
        dispatch(getFaq())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        //var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/faq/get", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log("Destination" + json.result);
                dispatch(getFaqSuccess(json.result))
                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                dispatch(getFaqFailed(err))
            })
    }
}
const getFaq = () => {
    return {
        type: LOAD_FAQ
    }
}


const getFaqSuccess = (data) => {
    return {
        type: LOAD_FAQ_SUCCESS,
        data
    }
}

const getFaqFailed = () => {
    return {
        type: LOAD_FAQ_FAIL
    }
}