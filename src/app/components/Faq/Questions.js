


import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const Questions = props => {
    return (
        <div className="panel style1">
            <h4 className="panel-title">
                <a data-toggle="collapse" href={props.linkId} className="collapsed">{props.questions}</a>
            </h4>
            <div id={props.id} className="panel-collapse collapse">
                <div className="panel-content">
                    {renderHTML(props.answer)}
                </div>
            </div>
        </div>

    );
}

export default Questions
