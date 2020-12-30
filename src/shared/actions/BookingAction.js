import EmailTemplates from '../../app/email-templates/Booking';

const confirmBooking = (data) => {
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

const sendBookingEmail = (full_name, hotelName, mobile_no, numofrooms, finalDateIn, finalDateOut, roomPrice, diffDays, RoomCost, email) => {
    return new Promise (function (resolve, reject) {
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        // myHeaders.append("Content-Type", "application/json");
        var emailBody = EmailTemplates.HotelBooking(full_name, hotelName, mobile_no, numofrooms, finalDateIn, finalDateOut, roomPrice, diffDays, RoomCost);
        var senderMail = "no-reply@mytrip.pk";	

        let formData = new FormData();
        formData.append('send', senderMail);
        formData.append('receive', email);
        formData.append('message', emailBody);
        formData.append('subject', "New Hotel Booking Request");

        var requestOptions = {
            method: 'POST',
            body: formData,
        };
        fetch("https://mytrip.pk/includes/sendEmail.php", requestOptions)
            .then(r => {
                debugger;
                let response = r.json();
                resolve({ type: 'EMAIL_SENT' })
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

export default {
    confirmBooking,
    sendBookingEmail
}