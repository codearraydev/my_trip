const TourBooking = (full_name, tourName, contact_no, hoteltype, travelOption, travelDate, travelFrom, travelReason) => {
    var message = '<html><head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"><\/script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"><\/script></head>';
    message += '<body>';
    message += '<p>Dear ' + full_name + '</p>';
    message += '<p>Thank you for choosing MyTrip.pk as your travel partner.\
                We have received your booking request for '+tourName+'.\
                We are checking for hotel availability and preparing a travel plan for you. You will be\
                notified within 6 hours. Tour details are as under: <p>';
    message += "<div class='table-responsive'>\
            <table class='table'>\
                    <tbody>\
                    <tr style='height: 20px;'>\
                    <td style='width: 30.6098%; height: 20px;'><strong>&nbsp;Name</strong></td>\
                    <td style='width: 64.3902%; height: 20px;'>"+full_name+"</td>\
                    </tr>\
                    <tr style='height: 20px;'>\
                    <td style='width: 30.6098%; height: 20px;'><strong>&nbsp;Mobile</strong></td>\
                    <td style='width: 64.3902%; height: 20px;'>"+contact_no+"</td>\
                    </tr>\
                    <tr style='height: 20px;'>\
                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Tour Location</strong></td>\
                    <td style='width: 64.3902%; height: 20px;'>"+tourName+"</td>\
                    </tr>\
                    <tr style='height: 20px;'>\
                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Hotel Type</strong></td>\
                    <td style='width: 64.3902%; height: 20px;'> "+hoteltype+" </td>\
                    </tr>\
                    <tr style='height: 20px;'>\
                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Traveling Option</strong></td>\
                    <td style='width: 64.3902%; height: 20px;'>By "+travelOption+"</td>\
                    </tr>\
                    <tr style='height: 20.8px;'>\
                    <td style='width: 30.6098%; height: 20.8px;'>&nbsp;<strong>Tour Date</strong></td>\
                    <td style='width: 64.3902%; height: 20.8px;'>"+travelDate+"</td>\
                    </tr>\
                    <tr style='height: 20px;'>\
                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Traveling From</strong></td>\
                    <td style='width: 64.3902%; height: 20px;'>"+travelFrom+"</td>\
                    </tr>\
                    <tr style='height: 20px;'>\
                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Travelling Reason</strong></td>\
                    <td style='width: 64.3902%; height: 20px;'>"+travelReason+"</td>\
                    </tr>\
                    </tbody>\
            </table>\
        </div>";
    message += "<p><img class='img-responsive' src='https://mytrip.pk/images/step-1.png' alt='workflow' /></p>\
        <p>Thank you in advance.</p>";
    message += '</body></html>';
}

const HotelBooking = (full_name, hotelName, mobile_no, numofrooms, finalDateIn, finalDateOut, roomPrice, diffDays, RoomCost) => {
    var message = '<html><head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"><\/script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"><\/script></head>';
                    message += '<body>';
                    message += '<p>Dear ' + full_name + '</p>';
                    message += '<p>Thank you for choosing MyTrip.pk as your travel partner.\
                                We have received your booking request for Hotel Booking in '+hotelName+'.\
                                We are checking for availability of room(s) and will notify you within 6 Hours.\
                                Booking details are: <p>';
                    message += "<div class='table-responsive'>\
                            <table class='table'>\
                                    <tbody>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'><strong>&nbsp;Name</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'>"+full_name+"</td>\
                                    </tr>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'><strong>&nbsp;Mobile</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'>"+mobile_no+"</td>\
                                    </tr>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Hotel Name</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'>"+hotelName+"</td>\
                                    </tr>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Room Type</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'> - </td>\
                                    </tr>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>No. Of Room</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'>"+numofrooms+"</td>\
                                    </tr>\
                                    <tr style='height: 20.8px;'>\
                                    <td style='width: 30.6098%; height: 20.8px;'>&nbsp;<strong>Check-In</strong></td>\
                                    <td style='width: 64.3902%; height: 20.8px;'>"+finalDateIn+"</td>\
                                    </tr>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Check-Out</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'>"+finalDateOut+"</td>\
                                    </tr>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Cost Per Night</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'>"+roomPrice+" PKR</td>\
                                    </tr>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>No. Of Nights</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'>"+diffDays+"</td>\
                                    </tr>\
                                    <tr style='height: 20px;'>\
                                    <td style='width: 30.6098%; height: 20px;'>&nbsp;<strong>Total Bill</strong></td>\
                                    <td style='width: 64.3902%; height: 20px;'>"+RoomCost+" PKR</td>\
                                    </tr>\
                                    </tbody>\
                            </table>\
                        </div>";
                    message += "<p><img class='img-responsive' src='https://mytrip.pk/images/step-1.png' alt='workflow' /></p>\
                        <p>Thank you in advance.</p>";
                    message += '</body></html>'

                return message;
}

export default {
    HotelBooking,
    TourBooking,
};