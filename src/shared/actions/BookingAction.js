import * as actions from "../constant/Constant";

export const confirmBooking = (data) => {
    return new Promise (function (resolve, reject) {
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(data);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://mytrip.pk/api/public/booking/hotel/add", requestOptions)
            .then(data => data.json())
            .then(json => {
                if(json.created.toLowerCase() == 'success'){
                    resolve({ type: 'BOOKING_CONFIRMED', payload: { bookingId: json.bookingid, info: data } })
                } else
                    reject({ type: 'BOOKING_NOT_CONFIRMED' })
            })
            .catch((err) => {
                console.log(err)
            })
    })
};