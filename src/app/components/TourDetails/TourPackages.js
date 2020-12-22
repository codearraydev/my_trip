import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const TourPackages = props => {
    return (
        // <li>
        //     <article className="box">
        //         <figure>
        //             <a href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"><img width={270} height={160} alt src="http://placehold.it/270x160" /></a>
        //         </figure>
        //         <div className="details">
        //             <span className="price">
        //                 <small>avg/night</small>
        //         $360
        //     </span>
        //             <h4 className="box-title">Hotel Hilton<small>Paris france</small></h4>
        //             <div className="feedback">
        //                 <div data-placement="bottom" data-toggle="tooltip" className="five-stars-container" title="4 stars"><span style={{ width: '80%' }} className="five-stars" /></div>
        //                 <span className="review">270 reviews</span>
        //             </div>
        //             <p className="description">Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam.</p>
        //             <div className="action">
        //                 <a className="button btn-small" href="hotel-detailed.html">SELECT</a>
        //                 <a className="button btn-small yellow popup-map" href="#" data-box="48.856614, 2.352222">VIEW ON MAP</a>
        //             </div>
        //         </div>
        //     </article>
        // </li>
        <div className="col-sm-6 col-md-4">
            <article className="box">
                <figure>
                    <a href="#" title className="hover-effect"><img src="http://placehold.it/270x160" alt width={270} height={160} /></a>
                </figure>
                <div className="details">
                    <span className="price"><small>FROM</small>$490</span>
                    <h4 className="box-title">Atlantis - The Palm<small>Paris</small></h4>
                </div>
            </article>
        </div>
    );
}

export default TourPackages