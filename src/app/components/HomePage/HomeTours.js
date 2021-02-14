import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const HomeTours = props => {
    return (
        <div className="col-sms-6 col-sm-6 col-md-3">
            <article className="box">
                <figure>
                    <a className="hover-effect popup-gallery"><img style={{ width: '100%', height: 175, objectFit: 'cover' }} width={270} height={160} alt src={props.picture} /></a>
                </figure>
                <div className="details text-center">
                    <h4 className="box-title">{props.destName}</h4>
                    <p className="offers-content"></p>
                    {/* <div data-placement="bottom" data-toggle="tooltip" title="4 stars" className="five-stars-container">
                        <span style={{ width: '80%' }} className="five-stars" />
                    </div> */}
                    {/* <p className="description">Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar.</p> */}
                    <Link to={props.destLink}><a style={{marginTop: 10}} className="button" href="#">View Details</a></Link>
                </div>
            </article>
        </div>
    );
}

export default HomeTours
