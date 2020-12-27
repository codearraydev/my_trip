import { BLOG_READ, BLOG_READ_SUCCESS, BLOG_READ_FAIL } from "../constant/Constant";

export const fetchBlogsReadFromApi = (slug) => {
    return (disptach) => {
        disptach(getBlogsRead())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,

            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/blog/get/" + slug, requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                disptach(getBlogsReadSuccess(json))


                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getBlogsReadFailed(err))
            })


    }
}

const getBlogsRead = () => {
    return {
        type: BLOG_READ
    }
}


const getBlogsReadSuccess = (data) => {
    return {
        type: BLOG_READ_SUCCESS,
        data
    }
}

const getBlogsReadFailed = () => {
    return {
        type: BLOG_READ_FAIL
    }
}