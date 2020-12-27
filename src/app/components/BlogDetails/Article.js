

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const Article = props => {
    return (
        <div className="post-content">
            <div className="blog-infinite">
                <div className="post">
                    <div className="post-content-wrapper">
                        <figure className="image-container">
                            <a href="#" className="hover-effect"><img width={"1170"} height={"342"} style={{ height: 342, width: 1170, objectFit: 'cover' }} src={props.blogPicture} alt /></a>
                        </figure>
                        <div className="details">
                            <h2 className="entry-title"><Link to={props.blogLink}>  <a href="#">{props.blogTitle}</a></Link></h2>
                            <div className="excerpt-container">
                                <p>{props.blogDescription}</p>
                            </div>
                            <div className="post-meta">
                                <div className="entry-date">
                                    <label className="date">29</label>
                                    <label className="month">Aug</label>
                                </div>
                                <div className="entry-author fn">
                                    <i className="icon soap-icon-user" /> Posted By:
                                    <a href="#" className="author">MyTrip</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Article
