import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const DestinationPlacesToSee = props => {

    return (
        <article className="box" style={{ height: 175, paddingRight: 25 }}>
            <figure className="col-sm-5 col-md-4" style={{ height: "100%" }}>
                <a style={{ height: "100%" }} title href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"> <LazyLoadImage
                    style={{ width: 270, height: "100%", objectFit: 'cover' }}
                    alt={'tryu'}
                    src={props.image} // use normal <img> attributes as props
                /></a>
            </figure>
            <div className="details col-sm-7 col-md-8">
                <div>
                    <div>
                        <h4 className="box-title">{props.name}</h4>
                    </div>
                </div>
                <div>
                    <p style={{height: "160px", overflow: "hidden", paddingRight: 5 }}>{props.desc}</p>
                </div>
            </div>
        </article>
    );
}


export default DestinationPlacesToSee