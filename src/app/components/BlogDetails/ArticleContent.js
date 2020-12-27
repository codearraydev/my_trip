




import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
const ArticleContent = props => {
    return (
        <>
            <figure className="image-container">
                <a href="#"><img width={"1170"} height={"342"} style={{ height: 342, width: 1170, objectFit: 'cover' }} src={props.photo} alt /></a>
            </figure>
            <div style={{ padding: 10 }} className="details">
                <h1 className="entry-title">{props.blogTitle}</h1>
                <div className="post-content">
                    {renderHTML(props.blogPost)}

                </div>

            </div>

        </>

    );
}

export default ArticleContent
