import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const HotelList = props => {


    return (

        <article className="box">
            <figure className="col-sm-5 col-md-4">
                <a title href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"> <LazyLoadImage
                    style={{ width: 270, height: 175, objectFit: 'cover' }}
                    alt={'tryu'}
                    src={props.picture} // use normal <img> attributes as props
                /></a>
            </figure>
            <div className="details col-sm-7 col-md-8">
                <div>
                    <div>
                        <h4 className="box-title">{props.hotelName}<small><i className="soap-icon-departure yellow-color" /> {props.hotel_city}</small></h4>
                        <div className="amenities">
                            <i className="soap-icon-wifi circle" />
                            <i className="soap-icon-fitnessfacility circle" />
                            <i className="soap-icon-fork circle" />
                            <i className="soap-icon-television circle" />
                        </div>
                    </div>
                    <div>
                        <div className="five-stars-container">
                            <span className="five-stars" style={{ width: '80%' }} />
                        </div>
                        <span className="review">270 reviews</span>
                    </div>
                </div>
                <div>
                    <p>{props.hotel_desc}</p>
                    <div>
                        <span className="price"><small>AVG/NIGHT</small>PKR. {props.hotel_average_price}</span>
                        <Link to={props.hotelLink}>

                            <a className="button btn-small full-width text-center" title href="#">SELECT</a>
                        </Link>
                    </div>
                </div>
            </div>
        </article>

    );
}


export default HotelList