import { TERMS_PAGE, TERMS_PAGE_SUCCESS, TERMS_PAGE_FAIL } from "../constant/Constant";

export const getTermsofUse = (slug) => {
    return (disptach) => {
        disptach(getTerms())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,

            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/page/get/3", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                disptach(getTermsSuccess(json))


                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getTermsFailed(err))
            })


    }
}

const getTerms = () => {
    return {
        type: TERMS_PAGE
    }
}


const getTermsSuccess = (data) => {
    return {
        type: TERMS_PAGE_SUCCESS,
        data
    }
}

const getTermsFailed = () => {
    return {
        type: TERMS_PAGE_FAIL
    }
}