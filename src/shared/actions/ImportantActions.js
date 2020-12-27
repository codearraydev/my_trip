import { IMPORANT_PAGE, IMPORANT_PAGE_SUCCESS, IMPORANT_PAGE_FAIL } from "../constant/Constant";

export const fetchImportantPage = (slug) => {
    return (disptach) => {
        disptach(getImportant())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,

            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/page/get/5", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                disptach(getImportantSuccess(json))


                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getImportantFailed(err))
            })


    }
}

const getImportant = () => {
    return {
        type: IMPORANT_PAGE
    }
}


const getImportantSuccess = (data) => {
    return {
        type: IMPORANT_PAGE_SUCCESS,
        data
    }
}

const getImportantFailed = () => {
    return {
        type: IMPORANT_PAGE_FAIL
    }
}