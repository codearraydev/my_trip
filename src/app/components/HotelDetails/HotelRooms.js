import React, { useState } from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Link, useHistory } from 'react-router-dom';
import { connect, useSelector, useDispatch } from "react-redux";

import { setHotelData } from '../../../shared/actions/HotelDataActions';
const HotelRooms = props => {
    const history = useHistory();

    const hotelDetail = useSelector(state => state.HotelData);    //getting user profile
    const dispatch = useDispatch();
    const images = [
        '//placekitten.com/1500/500',
        '//placekitten.com/4000/3000',
        '//placekitten.com/800/1200',
        '//placekitten.com/1500/1500',
    ];

    const [photoIndex, setPhoneIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="room-list listing-style3 hotel">
            <article className="box">
                <figure className="col-sm-4 col-md-3" onClick={() => setIsOpen(true)}>
                    <div className="hover-effect popup-gallery" href="#" title><img style={{ width: '100%', height: 160 }} src={props.roomPicture} alt /></div>
                </figure>
                <div className="details col-xs-12 col-sm-8 col-md-9">
                    <div>
                        <div>
                            <div className="box-title">
                                <h4 className="title">{props.roomTitle}</h4>
                                <dl className="description">
                                    <dt>Check-out:</dt>
                                    <dd>{props.checkout}</dd>
                                </dl>
                            </div>
                            <div className="amenities">
                                <i className="soap-icon-wifi circle" />
                                <i className="soap-icon-fitnessfacility circle" />
                                <i className="soap-icon-fork circle" />
                                <i className="soap-icon-television circle" />
                            </div>
                        </div>
                        <div style={{marginTop: 50}} className="price-section">
                            <span style={{ fontSize: 19 }} className="price"><small>PER/NIGHT</small>PKR. {props.pricepernight}</span>
                        </div>
                    </div>
                    <div>
                        <p>Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pulvinar massa idend porta nequetiam elerisque mi id, consectetur adipi deese cing elit maus fringilla bibe endum.</p>
                        <div className="action-section">
                            {/* <Link
                                
                            // to={{
                            //     pathname: "/hotels/book",
                            //     data: [{ id: 1, name: 'Ford', color: 'red' }] // your data array of objects
                            // }}
                            > */}
                            {/* <a onClick={() => {
                                dispatch(setHotelData("param1", "param2", "param3", "param4"))
                                history.push({
                                    pathname: "/hotels/book"
                                })
                            }} href="#" title className="button btn-small full-width text-center">BOOK NOW</a> */}
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </article>

            {
                isOpen && (
                    <Lightbox
                        mainSrc={props.photoGallery[photoIndex]}
                        nextSrc={props.photoGallery[(photoIndex + 1) % props.photoGallery.length]}
                        prevSrc={props.photoGallery[(photoIndex + props.photoGallery.length - 1) % props.photoGallery.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => setPhoneIndex((photoIndex + props.photoGallery.length - 1) % props.photoGallery.length)
                            // this.setState({
                            //     photoIndex: (photoIndex + images.length - 1) % images.length,
                            // })
                        }
                        onMoveNextRequest={() => setPhoneIndex((photoIndex + props.photoGallery.length + 1) % props.photoGallery.length)
                            // this.setState({
                            //     photoIndex: (photoIndex + 1) % images.length,
                            // })
                        }
                    />
                )}
        </div>

    );
}


export default HotelRooms