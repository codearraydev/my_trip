import { DEST_DETAILS, DEST_DETAILS_SUCCESS, DEST_DETAILS_FAIL } from "../constant/Constant";



export const getDestInformationApi = (dest_id) => {
    return (disptach) => {
        disptach(gettingInfoDest())

        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/destination/get/" + dest_id, requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log("Destination Json" + json);
                disptach(gettingInfoDestSuccess(json))
                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(gettingInfoDestSuccessFailed(err))
            })


    }
}

const gettingInfoDest = () => {
    return {
        type: DEST_DETAILS
    }
}


const gettingInfoDestSuccess = (data) => {
    return {
        type: DEST_DETAILS_SUCCESS,
        data
    }
}

const gettingInfoDestSuccessFailed = () => {
    return {
        type: DEST_DETAILS_FAIL
    }
}