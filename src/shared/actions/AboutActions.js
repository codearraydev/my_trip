import { ABOUT_PAGE, ABOUT_PAGE_SUCCESS, ABOUT_PAGE_FAIL } from "../constant/Constant";

export const fetchAboutUS = (slug) => {
    return (disptach) => {
        disptach(getAbout())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,

            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/page/get/1", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                disptach(getAboutSuccess(json))


                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getAboutFailed(err))
            })


    }
}

const getAbout = () => {
    return {
        type: ABOUT_PAGE
    }
}


const getAboutSuccess = (data) => {
    return {
        type: ABOUT_PAGE_SUCCESS,
        data
    }
}

const getAboutFailed = () => {
    return {
        type: ABOUT_PAGE_FAIL
    }
}