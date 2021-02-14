import { ActivityIndicator, TouchableOpacity, View } from "react-native-web";
import { useState, useEffect, useLayoutEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
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


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
//import { DateRange } from 'react-date-range';
import { range } from "underscore";


import {
    ReactiveBase,
    DateRange,
    ResultCard,
    SelectedFilters,
    ReactiveList,
} from '@appbaseio/reactivesearch';




var Carousel = require('react-responsive-carousel').Carousel;
const HotelDetail = props => {
    const { id } = props.match.params

    var styles = " .rdrDateRangeWrapper, .rdrMonth, .rdrMonthsVertical{ width:256px } ";

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

    const [state, setState] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        price: 0,
        error: null,
        rooms: 0,
        room_type: '',
        room_id: 0,
        hotel_id: id,
        hotel: hotelDetail.HotelInfo
    });


    const [fisrtLoad, setFirstLoad] = useState(true)
    useLayoutEffect(() => {
        if (fisrtLoad) {
            window.scrollTo(0, 0)
            setFirstLoad(false)
        }
        setFirstLoad(false)

    });

    useEffect(() => {
        setState({
            ranges: [{
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            }],
            price: 0,
            error: null,
            rooms: 0,
            hotel_id: id,
            hotel: hotelDetail.HotelInfo,
            room_type: '',
            room_id: 0
        });
        dispatch(getHotelInformationApi(id))
    }, [id])

    let rangeDates = {
        startDate: null,
        endDate: null,
        key: 'selection'
    };

    const zoomOutProperties = {
        indicators: false,
        scale: 0.4
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function roomTypeChangeEvent(e) {
        console.log(state)
        var dt = new Date(state.ranges[0].start);
        let monthSelected = monthNames[dt.getMonth()].toLowerCase()
        let price = hotelDetail.HotelInfo.hotelroom.find(x => x.room_id == e.target.value).roompricing.find(price => price.month.toLowerCase() == monthSelected).price
        setState({ ranges: state.ranges, hotel_id: id, hotel: hotelDetail.HotelInfo, price: price, error: null, rooms: document.getElementById('noOfRoomsDD').value, room_type: e.target.options[e.target.selectedIndex].innerHTML, room_id: e.target.value })
    }

    function dateRangeChangeEvent(rangeNew) {
        console.log(rangeNew)
        //alert(rangeNew)
        document.getElementById('roomTypeDD').value = 0
        rangeDates.startDate = rangeNew.start;
        rangeDates.endDate = rangeNew.end;

        console.log(rangeDates)
        setState({ room_type: state.room_type, ranges: [rangeNew], price: state.price, rooms: state.rooms, room_id: state.room_id, hotel: hotelDetail.HotelInfo, error: null })
    }

    // dateRangeChangeEvent = {
    //     function(value) {
    //         console.log("current value: ", value)
    //         // set the state
    //         // use the value with other js code
    //     }
    // }

    function noOfRoomsChangeEvent() {
        setState({ ranges: state.ranges, hotel_id: id, room_type: state.room_type, price: state.price, rooms: document.getElementById('noOfRoomsDD').value, hotel: hotelDetail.HotelInfo, room_id: state.room_id, error: null })
    }

    function bookHotel() {
        if (parseInt(state.rooms) == 0 || parseFloat(state.price) <= 0)
            return setState({ ranges: state.ranges, hotel_id: id, room_type: state.room_type, price: state.price, rooms: document.getElementById('noOfRoomsDD').value, hotel: hotelDetail.HotelInfo, room_id: state.room_id, error: 'Please provide all the required information' })

        setState({ ranges: state.ranges, hotel_id: id, room_type: state.room_type, price: state.price, rooms: state.rooms, room_id: state.room_id, hotel: hotelDetail.HotelInfo, error: null })

        props.history.push({
            pathname: '/booking-confirmation',
            state: state
        })
    }

    return (
        <div id="page-wrapper">
            <style>
                {styles}
            </style>
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
                                        <Slide
                                            {...zoomOutProperties}>
                                            {slideImages.map((each, index) => (
                                                <div key={index} style={{ width: "100%" }}>
                                                    <img style={{ objectFit: "cover", width: "100%", height: 400 }} src={each} />
                                                </div>
                                            ))}
                                        </Slide>
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
                                    {/* <li><a href="#hotel-reviews" data-toggle="tab">Reviews</a></li>
                                    <li><a href="#hotel-faqs" data-toggle="tab">FAQs</a></li> */}
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
                            <article style={{}} className="detailed-logo">
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

                                        <ReactiveBase
                                            app="airbeds-test-app"
                                            url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@arc-cluster-appbase-demo-6pjy6z.searchbase.io"
                                            enableAppbase
                                            type="listing"
                                        >
                                            <DateRange
                                                componentId="DateSensor"
                                                dataField="mtime"
                                                placeholder={{
                                                    start: 'Check-in',
                                                    end: 'Check-out',
                                                }}
                                                filterLabel="Date"
                                                onValueChange={dateRangeChangeEvent}
                                            // initialMonth={new Date()}
                                            //onChange={dateRangeChangeEvent}
                                            />
                                            {/* <DateRange
                                                componentId="DateSensor"
                                                dataField="mtime"
                                                title="DateRange"
                                                defaultValue={{
                                                    start: new Date(),
                                                    end: new Date('2022-12-31'),
                                                }}
                                                placeholder={{
                                                    start: 'Start Date',
                                                    end: 'End Date',
                                                }}
                                                focused={true}
                                                numberOfMonths={2}
                                                queryFormat="date"
                                                autoFocusEnd={true}
                                                showClear={true}
                                                showFilter={true}
                                                filterLabel="Date"
                                                URLParams={false}
                                            /> */}

                                        </ReactiveBase>




                                        {/* <DateRange
                                            editableDateInputs={true}
                                            onChange={dateRangeChangeEvent}
                                            moveRangeOnFirstSelection={false}
                                            ranges={state.ranges}
                                        /> */}

                                        <select style={{ width: "100%", marginTop: 15 }} id="noOfRoomsDD" onChange={noOfRoomsChangeEvent}>
                                            <option value="0" selected disabled>No. of rooms</option>
                                            <option value="1" key={1}>1</option>
                                            <option value="2" key={2}>2</option>
                                            <option value="3" key={3}>3</option>
                                            <option value="4" key={4}>4</option>
                                            <option value="5" key={5}>5</option>
                                            <option value="6" key={6}>6</option>
                                            <option value="7" key={7}>7</option>
                                            <option value="8" key={8}>8</option>
                                            <option value="9" key={9}>9</option>
                                            <option value="10" key={10}>10</option>
                                        </select>
                                        <select id="roomTypeDD" onChange={roomTypeChangeEvent} style={{ width: "100%", margin: "10px 0px" }}>
                                            <option value="0" selected disabled>Room Type</option>
                                            {
                                                typeof (hotelDetail.HotelInfo.hotelroom) !== 'undefined' ? (
                                                    hotelDetail.HotelInfo.hotelroom.map((item, index) => {
                                                        return <option value={item.room_id} key={index}>{item.room_type}</option>
                                                    })
                                                ) : null
                                            }
                                        </select>

                                        {
                                            state.price > 0 ? (
                                                <div style={
                                                    { padding: "0px 8px", margin: "0px 0px 5px 0px" }
                                                }>
                                                    <span>PKR. {state.price}</span>
                                                </div>
                                            ) : null
                                        }

                                        {
                                            state.error ? (
                                                <div style={
                                                    { padding: "0px 8px", margin: "0px 0px 5px 0px" }
                                                }>
                                                    <span>{state.error}</span>
                                                </div>
                                            ) : null
                                        }
                                        {/* <Link to='/booking-confirmation'> */}
                                        <a onClick={bookHotel} className="button yellow full-width uppercase btn-small">Book This Hotel</a>
                                        {/* </Link> */}
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

export default HotelDetail;
