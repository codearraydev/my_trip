import { BLOG_LIST, BLOG_LIST_SUCCESS, BLOG_LIST_FAIL } from "../constant/Constant";

export const fetchBlogsFromApi = () => {
    return (disptach) => {
        disptach(getBlogs())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "stay": "" });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
       
            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/blog/getpublic", requestOptions)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                disptach(getBlogsSuccess(json.result))


                //json[0].hasOwnProperty('entry') ? dispatch(getLettersSuccess(json[0].entry)) : dispatch(getLetterFinshed())
            })
            .catch((err) => {
                console.log(err)
                disptach(getBlogsFailed(err))
            })


    }
}

const getBlogs = () => {
    return {
        type: BLOG_LIST
    }
}


const getBlogsSuccess = (data) => {
    return {
        type: BLOG_LIST_SUCCESS,
        data
    }
}

const getBlogsFailed = () => {
    return {
        type: BLOG_LIST_FAIL
    }
}