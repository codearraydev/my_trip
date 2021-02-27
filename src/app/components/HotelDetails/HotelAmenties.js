import React from 'react';

// export default function HotelAmenties() {
const HotelAmenties = props => {
    return (
        <li className="col-md-4 col-sm-6">
            <div className="icon-box style1"><i className={props.class} />{props.name}</div>
        </li>

    );
}

export default HotelAmenties
