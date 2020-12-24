// import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { Link } from 'react-router-dom';
// import renderHTML from "react-render-html";
// const DestHotels = props => {
//     return (
//         // <li>
//         //     <article className="box">
//         //         <figure>
//         //             <a href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"><img width={270} height={160} alt src="http://placehold.it/270x160" /></a>
//         //         </figure>
//         //         <div className="details">
//         //             <span className="price">
//         //                 <small>avg/night</small>
//         //         $360
//         //     </span>
//         //             <h4 className="box-title">Hotel Hilton<small>Paris france</small></h4>
//         //             <div className="feedback">
//         //                 <div data-placement="bottom" data-toggle="tooltip" className="five-stars-container" title="4 stars"><span style={{ width: '80%' }} className="five-stars" /></div>
//         //                 <span className="review">270 reviews</span>
//         //             </div>
//         //             <p className="description">Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam.</p>
//         //             <div className="action">
//         //                 <a className="button btn-small" href="hotel-detailed.html">SELECT</a>
//         //                 <a className="button btn-small yellow popup-map" href="#" data-box="48.856614, 2.352222">VIEW ON MAP</a>
//         //             </div>
//         //         </div>
//         //     </article>
//         // </li>
//         // <div className="col-sm-6 col-md-4">
//         //     <article className="box">
//         //         <figure>
//         //             <a href="#" title className="hover-effect"><img src="http://placehold.it/270x160" alt width={270} height={160} /></a>
//         //         </figure>
//         //         <div className="details">
//         //             <span className="price"><small>FROM</small>$490</span>
//         //             <h4 className="box-title">Atlantis - The Palm<small>Paris</small></h4>
//         //         </div>
//         //     </article>
//         // </div>
//     );
// }

// export default DestHotels


import React, { useState } from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Link, useHistory } from 'react-router-dom';
import { connect, useSelector, useDispatch } from "react-redux";

import { setHotelData } from '../../../shared/actions/HotelDataActions';
const DestHotels = props => {
    const history = useHistory();

    const hotelDetail = useSelector(state => state.HotelData);    //getting user profile
    const dispatch = useDispatch();
    const images = [
        '//placekitten.com/1500/500',
        '//placekitten.com/4000/3000',
        '//placekitten.com/800/1200',
        '//placekitten.com/1500/1500',
    ];

    const [photoIndex, setPhoneIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="col-sm-6 col-md-4" style={ { maxHeight: 240 } }>
            <article className="box">
                <figure onClick={() => setIsOpen(true)}>
                    <a href="#" title className="hover-effect"><img style={{ width: 230, height: 160 }} src={props.roomPicture} alt width={270} height={160} /></a>
                </figure>
                <div className="details">
                    {/* <span className="price"><small>FROM</small>$490</span> */}
                    <h4 className="box-title">{props.roomTitle}<small>Paris</small></h4>
                </div>
            </article>
        </div>
        // <div className="room-list listing-style3 hotel">
        //     <article className="box">
        //         <figure className="col-sm-4 col-md-3" onClick={() => setIsOpen(true)}>
        //             <div className="hover-effect popup-gallery" href="#" title><img style={{ width: 230, height: 160 }} src={props.roomPicture} alt /></div>
        //         </figure>
        //         <div className="details col-xs-12 col-sm-8 col-md-9">
        //             <div>
        //                 <div>
        //                     <div className="box-title">
        //                         <h4 className="title">{props.roomTitle}</h4>
        //                         <dl className="description">

        //                             <dd>{props.checkout}</dd>
        //                         </dl>
        //                     </div>
        //                     <div className="amenities">
        //                         <i className="soap-icon-wifi circle" />
        //                         <i className="soap-icon-fitnessfacility circle" />
        //                         <i className="soap-icon-fork circle" />
        //                         <i className="soap-icon-television circle" />
        //                     </div>
        //                 </div>
        //                 <div className="price-section">
        //                     {/* <span style={{ fontSize: 19 }} className="price"><small>PER/NIGHT</small>PKR. {props.pricepernight}</span> */}
        //                 </div>
        //             </div>
        //             <div>
        //                 <p>{props.hotel_desc}</p>
        //                 <div className="action-section">
        //                     <a onClick={() => {
        //                         dispatch(setHotelData("param1", "param2", "param3", "param4"))
        //                         history.push({
        //                             pathname: props.hotelLink
        //                         })
        //                     }} href="#" title className="button btn-small full-width text-center">Visit</a>
        //                     {/* </Link> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </article>

        //     {
        //         isOpen && (
        //             <Lightbox
        //                 mainSrc={props.photoGallery[photoIndex]}
        //                 nextSrc={props.photoGallery[(photoIndex + 1) % props.photoGallery.length]}
        //                 prevSrc={props.photoGallery[(photoIndex + props.photoGallery.length - 1) % props.photoGallery.length]}
        //                 onCloseRequest={() => setIsOpen(false)}
        //                 onMovePrevRequest={() => setPhoneIndex((photoIndex + props.photoGallery.length - 1) % props.photoGallery.length)
        //                     // this.setState({
        //                     //     photoIndex: (photoIndex + images.length - 1) % images.length,
        //                     // })
        //                 }
        //                 onMoveNextRequest={() => setPhoneIndex((photoIndex + props.photoGallery.length + 1) % props.photoGallery.length)
        //                     // this.setState({
        //                     //     photoIndex: (photoIndex + 1) % images.length,
        //                     // })
        //                 }
        //             />
        //         )}
        // </div>

    );
}


export default DestHotels
