import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const CarsGrid = props => {

    const { car_id, car_make, car_model, car_type, car_passengers, car_seating_capacity, car_class, car_ac, car_gearbox, car_doors, car_price, car_image } = props.car;
    
    return (
        <div className="col-sms-6 col-sm-6 col-md-4">
            <article className="box">
                <figure>
                    <a>
                        <LazyLoadImage style={{ width: 'auto', height: 175, objectFit: 'cover' }} src={`https://www.mytrip.pk/api/app/Controllers/uploads/${car_image}`} />    
                    </a>
                </figure>
                <div className="details">
                    <span className="price"><small>per day</small>
                        <NumberFormat value={car_price} displayType={'text'} thousandSeparator={true} prefix={'PKR'} />
                    </span>
                    <h4 className="box-title">{car_make} { car_model } <small>{ car_type }</small></h4>
                    <div className="amenities">
                        <ul>
                            <li><i className="soap-icon-user circle"></i>{ car_passengers }</li>
                            <li><i className="soap-icon-suitcase circle"></i>4</li>
                            <li><i className="soap-icon-aircon circle"></i>{ car_ac == 1 ? 'Yes' : 'No' }</li>
                            <li><i className="soap-icon-fmstereo circle"></i>{ car_gearbox == 1 ? 'Manual' : 'Automatic' }</li>
                        </ul>
                    </div>
                    {/* <p className="mile"><span className="skin-color">Mileage:</span> up to 300 miles
                    </p> */}
                    <div className="action">
                        <a onClick={ () => props.hireCarNow(props.car) } className="button btn-small full-width">BOOK NOW</a>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default CarsGrid
