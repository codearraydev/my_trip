import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const DestinationGrid = props => {
    return (
        <div className="col-sm-6 col-md-4">
            <article className="box">
                <figure>
                    <a href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"><LazyLoadImage
                        style={{ width: '100%', height: 175, objectFit: 'cover' }}
                        alt={'tryu'}
                        src={props.picture} // use normal <img> attributes as props
                    /></a>
                </figure>
                <div className="details">
                    <span className="price">
                        {/* <small>avg/night</small>
                        PKR. {props.hotel_average_price} */}
                    </span>
                    <h4 className="box-title" style={{ height: 30, overflow: "hidden" }}>{props.destName}<small>{props.destRegion}</small></h4>
                    {/* <div className="feedback">
                        <div data-placement="bottom" data-toggle="tooltip" className="five-stars-container" title="4 stars"><span style={{ width: '80%' }} className="five-stars" /></div>
                        <span className="review">270 reviews</span>
                    </div> */}
                    <p className="description" style={{ height: 65, overflow: "hidden" }}>{renderHTML(props.dest_desc)}</p>
                    <div className="action">
                        <Link className="button btn-small" to={props.destLink}><a href="#"> SELECT</a></Link>
                        <a className="button btn-small yellow popup-map" href="#" data-box="48.856614, 2.352222">VIEW ON MAP</a>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default DestinationGrid
