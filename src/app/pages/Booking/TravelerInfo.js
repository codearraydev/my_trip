import React from 'react';

const TravelerInfo = React.forwardRef((props, ref) => {
    return (
        <React.Fragment ref={ref}>
            <h2>Traveler Information</h2>
            <dl className="term-description" id='receiptDiv'>
                <dt>Booking number:</dt><dd>{ props.data.bookingId }</dd>
                <dt>Full name:</dt><dd>{ props.data.full_name }</dd>
                <dt>E-mail address:</dt><dd>{ props.data.email_address }</dd>
                <dt>Rooms:</dt><dd>{ props.data.numofrooms }</dd>
                <dt>Street Address and number:</dt><dd>{ props.data.address }</dd>
                <dt>Town / City:</dt><dd>{ props.data.city }</dd>
                <dt>Country:</dt><dd>{ props.data.country }</dd>
            </dl>
        </React.Fragment>
    );
})

export default TravelerInfo;