import { ActivityIndicator, TouchableOpacity, View } from "react-native-web";
import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";

import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import HotelReview from '../../components/HotelDetails/HotelReview';
import HotelRooms from '../../components/HotelDetails/HotelRooms';
import HotelAmenties from '../../components/HotelDetails/HotelAmenties';
import HotelDescription from '../../components/HotelDetails/HotelDescription';
import HotelFaq from '../../components/HotelDetails/HotelFaq';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { getHotelInformationApi } from '../../../shared/actions/HotelDetailActions';

import HotelRules from "../../components/HotelDetails/HotelRules";


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { Zoom } from 'react-slideshow-image';
import Sidebar from "../../components/Sidebar";


// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRange } from 'react-date-range';



var Carousel = require('react-responsive-carousel').Carousel;
const HotelDetail = props => {
    const { id } = props.match.params

    // const { HotelInfo, isGetting } = props.HotelInfo;

    const hotelDetail = useSelector(state => state.HotelInfo);    //getting user profile
    const dispatch = useDispatch();
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    const slideImages = [

    ];


    const testinfFUction = () => {
        dispatch(getHotelInformationApi(32))
    }
    useEffect(() => {
        console.log("this is id=====>>>>" + id)
        dispatch(getHotelInformationApi(id))
    }, [id])



    const zoomOutProperties = {
        indicators: false,
        scale: 0.4
    }


    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    return (
        <div id="page-wrapper">
            <SubHeader />
            <div class="page-title-container">
                <div class="container">
                    <div class="page-title pull-left">
                        <h2 class="entry-title">Hotel Detailed</h2>
                    </div>
                    <ul class="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li class="active">Hotel Detailed</li>
                    </ul>
                </div>
            </div>

            <section id="content">
                <div className="container">
                    <div className="row">
                        <div id="main" className="col-md-9">
                            <div className="tab-container style1" id="hotel-main-content">
                                <ul className="tabs">
                                    <li className="active"><a data-toggle="tab" href="#photos-tab">photos</a></li>
                                    <li><a data-toggle="tab" href="#map-tab">map</a></li>
                                    <li className="pull-right"><a className="button btn-small yellow-bg white-color" href="#">TRAVEL GUIDE</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="photos-tab" className="tab-pane fade in active">

                                        {
                                            typeof (hotelDetail.HotelInfo.hotel) !== 'undefined' ? (
                                                hotelDetail.HotelInfo.gallery.map((item, index) => {

                                                    console.log("This is gallery===>>" + item.image_path)
                                                    slideImages.push('https://mytrip.pk/api/app/Controllers' + item.image_path)
                                                })
                                            ) : null
                                        }
                                        <Zoom
                                            {...zoomOutProperties}>
                                            {slideImages.map((each, index) => (
                                                <div key={index} style={{ width: "100%" }}>
                                                    <img style={{ objectFit: "cover", width: "100%", height: 400 }} src={each} />
                                                </div>
                                            ))}
                                        </Zoom>
                                    </div>
                                    <div id="map-tab" className="tab-pane fade">
                                        <iframe className="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.913788233577!2d74.87879331477001!3d36.48379829314663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e8ade46bbf3ccd%3A0xda14008b9702f1ca!2sPassu%20Ambassador%20Hotel!5e0!3m2!1sen!2s!4v1580110515567!5m2!1sen!2s" width="600" height="450" frameBorder="0" style={{ border: 0 }} />
                                    </div>
                                </div>
                            </div>

                            <div id="hotel-features" className="tab-container">
                                <ul className="tabs">
                                    <li className="active"><a href="#hotel-description" data-toggle="tab">Description</a></li>
                                    <li><a href="#hotel-availability" data-toggle="tab">Rooms</a></li>
                                    <li><a href="#hotel-amenities" data-toggle="tab">Amenities</a></li>
                                    <li><a href="#hotel-reviews" data-toggle="tab">Reviews</a></li>
                                    <li><a href="#hotel-faqs" data-toggle="tab">FAQs</a></li>
                                    <li><a href="#hotel-things-todo" data-toggle="tab">Hotel Rules</a></li>
                                    {/* <li><a href="#hotel-write-review" data-toggle="tab">Write a Review</a></li> */}
                                </ul>


                                {

                                    // console.log("THis is ===>>>" + hotelDetail.isGetting)
                                    hotelDetail.isGetting && <View style={{ textAlign: 'center', marginTop: 15 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                }
                                {
                                    !hotelDetail.isGetting &&
                                    <div className="tab-content">
                                        {
                                            typeof (hotelDetail.HotelInfo.hotel) !== 'undefined' ? (
                                                <>
                                                    <HotelDescription
                                                        hotelTitle={hotelDetail.HotelInfo.hotel.hotel_name}
                                                        hotelDescription={hotelDetail.HotelInfo.hotel.hotel_desc} />
                                                </>
                                            ) : null
                                        }


                                        <div className="tab-pane fade" id="hotel-availability">
                                            <div class="long-description">
                                                <h2>Available Rooms</h2>
                                                {
                                                    typeof (hotelDetail.HotelInfo.hotel) !== 'undefined' ? (
                                                        hotelDetail.HotelInfo.hotelroom.map((item, index) => {

                                                            let d = new Date();
                                                            return (
                                                                <HotelRooms
                                                                    roomTitle={item.room_type}
                                                                    checkout={item.checkout}
                                                                    pricepernight={item.roompricing[d.getMonth()].price}
                                                                    roomPicture={"https://mytrip.pk/api/app/Controllers" + item.roomgallery[0].image_path}
                                                                    photoGallery={item.roomgallery.map((picture, index) => (
                                                                        "https://mytrip.pk/api/app/Controllers" + picture.image_path
                                                                    ))}
                                                                />
                                                            )

                                                        })
                                                    ) : null
                                                }
                                            </div>
                                        </div>

                                        <HotelAmenties />
                                        <HotelReview />
                                        <HotelFaq />
                                        <HotelRules />
                                    </div>
                                }


                            </div>

                        </div>

                        {/* <Sidebar /> */}
                        <div className="sidebar col-md-3">
                            <article className="detailed-logo">
                                <figure>
                                    <img width={114} height={85} src="http://placehold.it/114x85" alt />
                                </figure>

                                {

                                    hotelDetail.isGetting && <View style={{ textAlign: 'center', marginTop: 15 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                }
                                {
                                    !hotelDetail.isGetting &&
                                    <div className="details">

                                        {
                                            typeof (hotelDetail.HotelInfo.hotel) !== 'undefined' ? (
                                                <h2 className="box-title">{hotelDetail.HotelInfo.hotel.hotel_name}<small><i className="soap-icon-departure yellow-color" /><span className="fourty-space">{hotelDetail.HotelInfo.hotel.hotel_city}</span></small></h2>
                                            ) : null
                                        }


                                        <a className="button yellow full-width uppercase btn-small">Book This Hotel</a>
                                    </div>
                                }

                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}




// function mapStateToProps(state) {
//     return {
//         HotelInfo: state.HotelInfo
//     }
// }

// function mapDispatchToProps(disptach) {
//     return {
//         getHotelDetails: (hotel_id) => disptach(getDetailfromApi(hotel_id)),

//     }
// }


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HotelDetail)

export default HotelDetail;
