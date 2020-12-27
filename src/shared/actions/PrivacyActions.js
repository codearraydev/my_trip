import { PRIVACY_PAGE, PRIVACY_PAGE_SUCCESS, PRIVACY_PAGE_FAIL } from "../constant/Constant";

export const fetchPrivacyPage = (slug) => {
    return (disptach) => {
        disptach(getPrivacy())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,

            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/page/get/2", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                disptach(getPrivacySuccess(json))


                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getPrivacyFailed(err))
            })


    }
}

const getPrivacy = () => {
    return {
        type: PRIVACY_PAGE
    }
}


const getPrivacySuccess = (data) => {
    return {
        type: PRIVACY_PAGE_SUCCESS,
        data
    }
}

const getPrivacyFailed = () => {
    return {
        type: PRIVACY_PAGE_FAIL
    }
}