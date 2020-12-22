import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const ToursPlan = props => {
    return (
        <div className="long-description">
            <h4>{props.destinationName}</h4>
            <> {renderHTML(props.descriptionDetails)} </>
        </div>
    );
}

export default ToursPlan
