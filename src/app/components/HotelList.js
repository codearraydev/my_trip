import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const HotelList = props => {



    var styles = ".read-more { background-image: linear-gradient(to bottom, transparent, black); position: absolute; bottom: 0; left: 0; width: 100%; text-align: center; margin: 0; padding: 30px 0;  } .listing-style3.hotel .details { padding: 15px 0 0px 20px !important } #clamped-content-dest-desc { margin-bottom: 0px !important } .clamp-lines__button { font-weight: bold; font-size: 8pt; background: white; color: black !important; margin: 0px; padding: 0px; }"

    return (

        <article className="box">
            <style>
                {styles}
            </style>
            <figure className="col-sm-5 col-md-4">
                <Link to={props.hotelLink}>
                    <a title  className="hover-effect"> <LazyLoadImage
                        style={{ width: '100%', height: 175, objectFit: 'cover' }}
                        alt={'tryu'}
                        src={props.picture} // use normal <img> attributes as props
                    /></a>
                </Link>
            </figure>
            <div className="details col-sm-7 col-md-8">
                <div>
                    <div>
                        <Link to={props.hotelLink}><h4 className="box-title">{props.hotelName}<small><i className="soap-icon-departure yellow-color" /> {props.hotel_city}</small></h4></Link>
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
                    <p style={{ display: 'inline-block', textOverflow: 'ellipsis', height: 100, overflow: "hidden" }}>{props.hotel_desc}</p>
                    <div>
                        {/* <span className="price"><small>AVG/NIGHT</small>PKR. {props.hotel_average_price}</span> */}
                        <Link to={props.hotelLink}>
                            <a className="button btn-small full-width text-center" title href="#">SELECT</a>
                        </Link>

                        {/* <a className="button btn-small full-width text-center" title href={props.hotelLink}>SELECT</a> */}

                    </div>
                </div>
            </div >
        </article >

    );
}


export default HotelList