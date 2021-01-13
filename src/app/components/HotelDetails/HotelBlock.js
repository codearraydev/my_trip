import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
const HotelBlock = props => {
    return (


        <div className="col-sms-6 col-sm-6 col-md-4">
            <article className="box">
                <figure>
                    <Link to={props.hotelLink}><a href="#" title className="hover-effect"><img style={{ width: '100%', height: 160, objectFit: 'cover' }} src={props.picture} alt width={270} height={160} /></a></Link>
                </figure>
                <div className="details">
                    <Link to={props.hotelLink}><a title="View all" href="#" className="pull-right button uppercase">select</a></Link>
                    <Link to={props.hotelLink}><h6 style={{ height: 12, overflow: 'hidden' }} className="box-title">{props.hotelName}</h6></Link>
                    <label className="price-wrapper">
                        {props.hotel_city}
                    </label>
                </div>
            </article>
        </div>

        // <div className="col-sm-6 col-md-4">
        //     <article className="box">
        //         <figure>
        //             <Link to={props.hotelLink}>
        //                 <a title className="hover-effect"><LazyLoadImage
        //                     style={{ width: '100%', height: 175, objectFit: 'cover' }}
        //                     alt={'tryu'}
        //                     src={props.picture} // use normal <img> attributes as props
        //                 /></a>
        //             </Link>
        //         </figure>
        //         <div className="details">
        //             {/* <span className="price">
        //                 <small>avg/night</small>
        //                 PKR. {props.hotel_average_price}
        //             </span> */}
        //             <Link to={props.hotelLink}><h4 className="box-title" style={{ height: 30, overflow: "hidden" }}>{props.hotelName}<small>{props.hotel_city}</small></h4></Link>
        //             <div className="feedback">
        //                 <div data-placement="bottom" data-toggle="tooltip" className="five-stars-container" title="4 stars"><span style={{ width: '80%' }} className="five-stars" /></div>
        //                 <span className="review">270 reviews</span>
        //             </div>
        //             <p className="description" style={{ height: 65, overflow: "hidden" }}>{props.hotel_desc}</p>
        //             <div className="action">
        //                 {/* <a className="button btn-small" href={props.hotelLink}> SELECT</a> */}
        //                 <Link className="button btn-small" to={props.hotelLink}><a href="#"> SELECT</a></Link>
        //                 <a className="button btn-small yellow popup-map" href="#" data-box="48.856614, 2.352222">VIEW ON MAP</a>
        //             </div>
        //         </div>
        //     </article>
        // </div>
    );
}

export default HotelBlock
