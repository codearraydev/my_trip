import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
export default function SlideShow() {

    const images = [
        {
            src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash18.jpg',
            thumbnail:
                'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash18.jpg',
            caption: 'Lorem ipsum dolor sit amet',
            width: 1920,
            height: 'auto'
        },
        {
            src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash19.jpg',
            thumbnail:
                'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash19.jpg',
            caption: 'Consecutur adiscip elit',
            width: 2000,
            height: 'auto'
        },
    ]
    return (
        <div className="MyComponent">
            <SRLWrapper images={images} />
        </div>
    );
}
