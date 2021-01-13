import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const DestDecs = props => {
    return (
        <div className="long-description">
            <h2 style={{ borderBottom: 2, borderBottomStyle: 'solid', borderBottomColor: '#fdb714', paddingBottom: 10 }}>{props.destinationName}</h2>
            <p style={{ textAlign: 'justify', fontFamily: 'cursive !important' }}>  {renderHTML(props.descriptionDetails)} </p>
        </div>
    );
}

export default DestDecs
