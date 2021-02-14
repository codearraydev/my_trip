import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import renderHTML from "react-render-html";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native-web";
import { BrowserView, MobileView } from 'react-device-detect';
import Lightbox from 'react-image-lightbox';

import { Modal, Button, ModalBody, ModalDialog, ModalFooter, ModalTitle, ModalProps, ModalDialogProps } from 'react-bootstrap';
const TourPackages = props => {


    const [photoIndex, setPhoneIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // <li>
        //     <article className="box">
        //         <figure>
        //             <a href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"><img width={270} height={160} alt src="http://placehold.it/270x160" /></a>
        //         </figure>
        //         <div className="details">
        //             <span className="price">
        //                 <small>avg/night</small>
        //         $360
        //     </span>
        //             <h4 className="box-title">Hotel Hilton<small>Paris france</small></h4>
        //             <div className="feedback">
        //                 <div data-placement="bottom" data-toggle="tooltip" className="five-stars-container" title="4 stars"><span style={{ width: '80%' }} className="five-stars" /></div>
        //                 <span className="review">270 reviews</span>
        //             </div>
        //             <p className="description">Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam.</p>
        //             <div className="action">
        //                 <a className="button btn-small" href="hotel-detailed.html">SELECT</a>
        //                 <a className="button btn-small yellow popup-map" href="#" data-box="48.856614, 2.352222">VIEW ON MAP</a>
        //             </div>
        //         </div>
        //     </article>
        // </li>
        <>
            <div className="col-sm-6 col-md-4">

                {/* <article className="box">
                        <figure>
                            <a title ><img style={{ width: '100%', height: 160, objectFit: 'cover' }} src={[props.packagePicture]} alt width={270} height={160} /></a>
                        </figure>

                        <div className="details">
                            <h4 className="box-title">{props.packageName}</h4>
                        </div>


                    </article> */}


                <article className="box">
                    <figure>
                        <a title ><img style={{ width: '92%', marginLeft: 15, height: 160, objectFit: 'cover' }} src={[props.packagePicture]} alt width={270} height={160} /></a>
                    </figure>
                    <div className="details">
                        <span className="price">

                        </span>
                        <h4 className="box-title" style={{ height: 30, overflow: "hidden" }}>{props.packageName}<small></small></h4>


                        <BrowserView>
                            <div className="action">
                                <a onClick={props.onPress} className="button btn-small"> Book Tour</a>
                                <a onClick={() => setIsOpen(true)} style={{ marginLeft: 4 }} className="button btn-small yellow" data-box="48.856614, 2.352222">View Package</a>
                            </div>
                        </BrowserView>

                        <MobileView>
                            <div style={{ marginLeft: 4 }} className="action">
                                <a onClick={props.onPress} className="button btn-small"> Book Tour</a>
                                <a onClick={() => setIsOpen(true)} style={{ marginLeft: 6, width: 145 }} className="button btn-small yellow" data-box="48.856614, 2.352222">View Package</a>
                            </div>
                        </MobileView>

                    </div>
                </article>




            </div >

            {
                isOpen && (
                    <View>

                        <Lightbox
                            mainSrc={props.packagePicture}
                            onCloseRequest={() => setIsOpen(false)}
                        />

                    </View>
                )}

        </>

    );
}

export default TourPackages