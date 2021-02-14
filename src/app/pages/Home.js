import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, TouchableOpacity, View, Button, Text } from "react-native-web";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeTours from '../components/HomePage/HomeTours';
import HomeHotels from '../components/HomePage/HomeHotels';

import HomeDestinations from "../components/HomePage/HomeDestinations";

import { fetchToursFromApi } from "../../shared/actions/TourActions"
import { fetchHotelsFromApi, fetchFilterHotelsFromApi } from "../../shared/actions/HotelActions";
import { fetchDestFromApi } from "../../shared/actions/DestinationAction";

import { Link } from 'react-router-dom';

import $ from "jquery";

const Home = props => {

    var base_url = 'https://mytrip.pk';
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms, 5 second for example
    $(document).ready(function () {

        // $('.search').keyup(function () {
        //     clearTimeout(typingTimer);
        //     if ($('#in').val) {

        //     }
        // });
        $(".search").keyup(function () {
            console.log("Hello");

            var searchbox = $(this).val();
            var myurl = base_url + "/api/public/destination/getplaces/" + searchbox;
            //var dataString = 'searchword='+ searchbox;
            console.log(myurl);
            if (searchbox == '') {
                $("#display").html('').hide();
                document.getElementById('display').style.display = "none";
                console.log("if main");
                $(".display_box").empty();
                $(".display_box").remove();

            }

            else {
                console.log("Hello");


                var myHeaders = new Headers();
                myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
                myHeaders.append("Cookie", "PHPSESSID=4a8cd1d868ab537f9ea931eccbd5e275");

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch(myurl, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        $("#display").html(result).show();
                    })
                    .catch(error => console.log('error', error));

                // //alert("ok");
                // console.log("else main");
                // var xhr = new XMLHttpRequest();
                // xhr.withCredentials = false;

                // xhr.addEventListener("readystatechange", function () {
                //     if (this.readyState === 4) {
                //         //console.log(this.responseText);
                //         $("#display").html(this.responseText).show();
                //     }
                // });

                // xhr.open("GET", myurl);
                // xhr.setRequestHeader("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");

                // xhr.send();



            }
            return false;
        });
    });

    const destinationList = useSelector(state => state.Tours);    //getting user profile
    const hotelInformation = useSelector(state => state.Hotels);    //getting user profile
    const destinationListMain = useSelector(state => state.Destinations);    //getting user profile
    const dispatch = useDispatch();


    const initialFIlters = JSON.stringify({ "region": null, "type": null, "style": null, "duration": null, "terrain": null, "travel_act": null, "basecity": null });
    const initialData = JSON.stringify({ "region": null });
    useEffect(() => {
        dispatch(fetchToursFromApi(initialFIlters))
        dispatch(fetchHotelsFromApi())
        dispatch(fetchDestFromApi(initialData))
    }, [])


    function searchEvent() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () {

            /*** */
            var searchbox = $(this).val();
            var myurl = base_url + "/api/public/destination/getplaces/" + searchbox;
            //var dataString = 'searchword='+ searchbox;
            console.log(myurl);
            if (searchbox == '') {
                $("#display").html('').hide();
                document.getElementById('display').style.display = "none";
                console.log("if main");
                $(".display_box").empty();
                $(".display_box").remove();

            }

            else {
                console.log("Hello");


                var myHeaders = new Headers();
                myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
                myHeaders.append("Cookie", "PHPSESSID=4a8cd1d868ab537f9ea931eccbd5e275");

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch(myurl, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        $("#display").html(result).show();
                    })
                    .catch(error => console.log('error', error));

                // //alert("ok");
                // console.log("else main");
                // var xhr = new XMLHttpRequest();
                // xhr.withCredentials = false;

                // xhr.addEventListener("readystatechange", function () {
                //     if (this.readyState === 4) {
                //         //console.log(this.responseText);
                //         $("#display").html(this.responseText).show();
                //     }
                // });

                // xhr.open("GET", myurl);
                // xhr.setRequestHeader("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");

                // xhr.send();



            }
            /**** */

        }, doneTypingInterval);
    }
    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            ;
    }


    function openSearch() {
        //document.getElementById("myOverlay").style.display = "block";
       
    }

    function closeSearch() {
        document.getElementById("myOverlay").style.display = "none";
    }
    return (
        <div id="page-wrapper">
            <Header />





            <div className="fullwidthbanner-container">
                {/* <div className="revolution-slider" style={{ height: 450, overflow: 'hidden' }}>
                    <img src="https://adbholidays.com/image/cache/template//adult-adventure-backpacker-935791-2080x646.jpg" alt />
                    <input type="text" class="input-text full-width search" name="place" id="myplace" onKeyUp={() => searchEvent()} onkeydown="return (event.keyCode!=13);" placeholder="enter a destination or hotel name" />
                    <div id="display" style={{ display: 'none' }}>
                    </div>
                </div> */}

                <div className="container_cover">
                    <img src="https://adbholidays.com/image/cache/template//adult-adventure-backpacker-935791-2080x646.jpg" alt="Snow" style={{ width: '100%' }} />
                    <div className="centered_cover">
                        <input style={{width: 180}} type="text" class="input-text full-width search" name="place" id="myplace" onKeyUp={() => searchEvent()} onkeydown="return (event.keyCode!=13);" placeholder="enter a destination or hotel name" />
                        <div id="display" style={{ display: 'none' }}>
                        </div>
                        {/* <button class="openBtn_cover" onclick={() => openSearch()}>Open Search Box</button>
                        <div id="myOverlay" className="overlay">
                            <span className="closebtn" onclick={() => closeSearch()} title="Close Overlay">x</span>
                            <div className="overlay-content">
                                <form action="action_page.php">
                                    <input type="text" placeholder="Search.." name="search" />
                                    <button type="submit"><i className="fa fa-search" /></button>
                                </form>
                            </div>
                        </div> */}


                    </div>
                </div>


            </div>


            <section id="content">
                <div className="section container">
                    <h2>Popular Tours</h2>
                    <div className="row image-box style3">



                        {
                            destinationList.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                        }
                        {

                            typeof (destinationList.Tours) !== 'undefined' && destinationList.Tours.length ? (
                                destinationList.Tours.slice(0, 4).map((item, index) => {
                                    // console.log(item.dest_cover_image);
                                    return (
                                        <HomeTours
                                            picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.tour_cover}
                                            destName={item.tour_location}
                                            destRegion={item.dest_cat_name}
                                            dest_desc={item.tour_description}
                                            // hotel_average_price={item.hotel_average_price}
                                            destLink={'/tours/main/' + item.tour_id}
                                        />
                                    )
                                })
                            ) : null
                        }

                        {/* 
                        <HomeTours />
                        <HomeTours />
                        <HomeTours /> */}


                    </div>
                </div>


                {/* <div className="global-map-area section parallax" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="text-center description">
                            <h1>We Provide You An Ultimate Travel Experience</h1>
                            <p>Nunc cursus libero purusac congue arcu cursus utsed vitae pulvinar massa idporta neque.</p>
                            <p>Etiam elerisque mi id faucibus iaculis vitae pulvinar.</p>
                        </div>
                        <br />
                        <div className="row image-box style8">
                            <div className="col-md-4">
                                <article className="box animated" data-animation-type="fadeInUp">
                                    <figure className="middle-block">
                                        <img src="http://placehold.it/100x172" alt className="middle-item" width={100} height={172} />
                                        <span className="opacity-wrapper" />
                                    </figure>
                                    <div className="details">
                                        <h2 className="box-title">Travel</h2>
                                        <p>
                                            Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-4">
                                <article className="box animated" data-animation-type="fadeInUp">
                                    <figure className="middle-block">
                                        <img src="http://placehold.it/100x172" alt className="middle-item" width={100} height={172} />
                                        <span className="opacity-wrapper" />
                                    </figure>
                                    <div className="details">
                                        <h2 className="box-title">Discover</h2>
                                        <p>
                                            Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.
            </p>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-4">
                                <article className="box animated" data-animation-type="fadeInUp">
                                    <figure className="middle-block">
                                        <img src="http://placehold.it/100x172" alt className="middle-item" width={100} height={172} />
                                        <span className="opacity-wrapper" />
                                    </figure>
                                    <div className="details">
                                        <h2 className="box-title">Enjoy</h2>
                                        <p>
                                            Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.
            </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div> */}





                {/* Hotels sections */}
                <div className="section container">
                    <h2>Popular Hotels</h2>
                    <div className="row image-box hotel listing-style1">
                        {
                            hotelInformation.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                        }
                        {

                            typeof (hotelInformation.Hotels) !== 'undefined' && hotelInformation.Hotels.length ? (
                                hotelInformation.Hotels.slice(0, 4).map((item, index) => {
                                    // console.log(item.dest_cover_image);
                                    return (
                                        <HomeHotels
                                            picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.hotel_cover}
                                            hotelName={item.hotel_name}
                                            hotel_city={item.hotel_city}
                                            hotel_desc={item.hotel_desc}
                                            hotel_average_price={item.hotel_average_price}
                                            hotelLink={'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                        />
                                    )
                                })
                            ) : <p>No Records Found</p>
                        }
                    </div>
                </div>



                <div className="section container">
                    <h2>Popular Destinations</h2>
                    <div className="row image-box style3">

                        {
                            destinationListMain.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                        }
                        {

                            typeof (destinationListMain.Destinations) !== 'undefined' && destinationListMain.Destinations.length ? (
                                destinationListMain.Destinations.slice(0, 4).map((item, index) => {
                                    // console.log(item.dest_cover_image);
                                    return (
                                        <HomeDestinations
                                            picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.dest_cover_image}
                                            destName={item.dest_name}
                                            destRegion={item.dest_cat_name}
                                            dest_desc={item.dest_description}
                                            // hotel_average_price={item.hotel_average_price}
                                            destLink={'/destinations/' + convertToSlug(item.dest_name) + '/' + item.dest_id}  //{'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                        />
                                    )
                                })
                            ) : null
                        }

                    </div>
                </div>




            </section>
            <Footer />
        </div>
    );
}

export default Home;
