import EmailTemplates from '../../app/email-templates/Booking';

const confirmTourBooking = (data) => {
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
        debugger;
        fetch("http://mytrip.pk/api/public/booking/add", requestOptions)
            .then(data => data.json())
            .then(json => {
                if(json.created.toLowerCase() == 'success'){
                    resolve({ type: 'TOUR_BOOKING_CONFIRMED', payload: { bookingId: json.bookingid, info: data } })
                } else
                    reject({ type: 'TOUR_BOOKING_NOT_CONFIRMED' })
            })
            .catch((err) => {
                reject({ type: 'TOUR_BOOKING_NOT_CONFIRMED', payload: { err: err } })
            })
    })
};

const sendBookingEmail = (full_name, tourName, contact_no, hoteltype, travelOption, travelDate, travelFrom, travelReason, email) => {
    return new Promise (function (resolve, reject) {
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var emailBody = EmailTemplates.TourBooking(full_name, tourName, contact_no, hoteltype, travelOption, travelDate, travelFrom, travelReason);
        var raw = JSON.stringify(emailBody);
        var senderMail = "no-reply@mytrip.pk";	
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: {
                send: senderMail,
                receive: email,
                message: emailBody,
                subject: "Tour Booking"
            },
            redirect: 'follow'
        };
        debugger;
        fetch("https://mytrip.pk/includes/sendEmail.php", requestOptions)
            .then(r => {
                let response = r.json();
                resolve({ type: 'EMAIL_SENT' })
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

export default {
    confirmTourBooking,
    sendBookingEmail
}