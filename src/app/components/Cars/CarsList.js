import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const CarsList = props => {

    const { car_id, car_make, car_model, car_type, car_passengers, car_seating_capacity, car_class, car_ac, car_gearbox, car_doors, car_price, car_image } = props.car;

    return (
        <article className="box">
            <figure class="col-xs-3">
                <span>
                    <LazyLoadImage src={`https://www.mytrip.pk/api/app/Controllers/uploads/${car_image}`} />
                </span>
            </figure>
            <div className="details col-xs-9 clearfix">
                <div className="col-sm-8">
                    <div className="clearfix">
                        <h4 className="box-title">{car_make} { car_model } <small>{ car_type }</small></h4>
                    </div>
                    <div className="amenities">
                        <ul>
                            <li><i className="soap-icon-user circle"></i>{ car_passengers }</li>
                            <li><i className="soap-icon-suitcase circle"></i>4</li>
                            <li><i className="soap-icon-aircon circle"></i>{ car_ac == 1 ? 'Yes' : 'No' }</li>
                            <li><i className="soap-icon-fmstereo circle"></i>{ car_gearbox == 1 ? 'Manual' : 'Automatic' }</li>
                        </ul>
                    </div>
                </div>
                <div className="action col-xs-6 col-sm-2">
                    <span className="price"><small>per day</small><NumberFormat value={car_price} displayType={'text'} thousandSeparator={true} prefix={'PKR'} /></span>
                    <a onClick={ () => props.hireCarNow(props.car) } className="button btn-small full-width">BOOK NOW</a>
                </div>
            </div>
        </article>
    );
}

export default CarsList