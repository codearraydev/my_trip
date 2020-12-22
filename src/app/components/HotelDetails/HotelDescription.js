import React from 'react';

const HotelDescription = props => {
    return (
        <div class="tab-pane fade in active" id="hotel-description">
            <div class="long-description">
                <h2>{props.hotelTitle}</h2>
                <p>{props.hotelDescription}</p>
            </div>
        </div>

    );
}
export default HotelDescription