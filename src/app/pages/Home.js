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

import { BrowserView, MobileView } from 'react-device-detect';

import { Link } from 'react-router-dom';

import $ from "jquery";

const Home = props => {

    const destinationList = useSelector(state => state.Tours);    //getting user profile
    const hotelInformation = useSelector(state => state.Hotels);    //getting user profile
    const destinationListMain = useSelector(state => state.Destinations);    //getting user profile
    const dispatch = useDispatch();


    var base_url = 'https://mytrip.pk';
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms, 5 second for example
    $(document).ready(function () {

        // $('.search').keyup(function () {
        //     clearTimeout(typingTimer);
        //     if ($('#in').val) {

        //     }
        // });
        $("#myplace").keyup(function () {
            console.log("Hello");

            var searchbox = $(this).val();
            var myurl = base_url + "/api/public/destination/getplaces/" + searchbox;
            //var dataString = 'searchword='+ searchbox;
            console.log(myurl);
            autocomplete(document.getElementById("myplace"), destinationListMain.Destinations);
            return false;
        });
    });



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


    function autocomplete(inp, arr) {
        if (arr.length > 0) {
            /*the autocomplete function takes two arguments,
         the text field element and an array of possible autocompleted values:*/
            ///let myJson = JSON.parse(arr);
            var currentFocus;
            /*execute a function when someone writes in the text field:*/
            inp.addEventListener("input", function (e) {
                var a, b, i, val = this.value;
                /*close any already open lists of autocompleted values*/
                closeAllLists();
                if (!val) { return false; }
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                this.parentNode.appendChild(a);
                /*for each item in the array...*/
                for (i = 0; i < arr.length; i++) {
                    /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i].dest_name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/

                        b.innerHTML = "<a href='#'><p style='color: #000;'><img src='https://www.mytrip.pk/api/app/Controllers/uploads/" + arr[i].dest_cover_image + "'  width='50' height='50'> <strong>" + arr[i].dest_name.substr(0, val.length) + "</strong>" + arr[i].dest_name.substr(val.length) + "</p></a>";
                        //b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='/destinations/" + convertToSlug(arr[i].dest_name) + "/" + arr[i].dest_id + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            //inp.value = this.getElementsByTagName("input")[0].value;
                            window.location.href = window.location.origin + this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
            });
            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function (e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode == 38) { //up
                    /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode == 13) {
                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                    e.preventDefault();
                    if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                    }
                }
            });
            function addActive(x) {
                /*a function to classify an item as "active":*/
                if (!x) return false;
                /*start by removing the "active" class on all items:*/
                removeActive(x);
                if (currentFocus >= x.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (x.length - 1);
                /*add class "autocomplete-active":*/
                x[currentFocus].classList.add("autocomplete-active");
            }
            function removeActive(x) {
                /*a function to remove the "active" class from all autocomplete items:*/
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                }
            }
            function closeAllLists(elmnt) {
                /*close all autocomplete lists in the document,
                except the one passed as an argument:*/
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }
            /*execute a function when someone clicks in the document:*/
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        } else {
            console.log("Not Defined")
        }


    }



    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            ;
    }

    //autocomplete(document.getElementById("myInput"), destinations);
    // if(typeof (destinationListMain.Destinations) !== 'undefined' && destinationListMain.Destinations.length){
    //     alert("all is weel");
    // }


    return (
        <div id="page-wrapper">
            <Header />





            <div className="fullwidthbanner-container">
                {/* <div className="revolution-slider" style={{ height: 450, overflow: 'hidden' }}>
                    <img src="https://adbholidays.com/image/cache/template//adult-adventure-backpacker-935791-2080x646.jpg" alt />
                    <input type="text" class="input-text full-width search" name="place" id="myplace" onKeyUp={() => searchEvent()} onkeydown="return (event.keyCode!=13);" placeholder="enter a destination or hotel name" />
                    <div id="display" style={{ display: 'none' }}  NNP_0472_2080x646.jpg>
                    </div>
                </div> */}

                <div className="container_cover">
                    <BrowserView>
                        <img src="https://www.mytrip.pk/images/Untitled-1.jpg" alt="Snow" style={{ width: '100%' }} />
                    </BrowserView>

                    <MobileView>
                        <img src="https://www.mytrip.pk/images/Untitled-1.jpg" alt="Snow" style={{ width: '100%', height: 300 }} />
                    </MobileView>
                    <div className="centered_cover">



                        <BrowserView>
                            <div>
                                <h4 style={{marginBottom: 25 , color: '#fff' , fontSize: 26 , fontWeight: 'bold'}} className="box-title"> Pakistan's Premium Travel Platform </h4>
                            </div>
                            <div style={{ border: '2px solid #fff', borderRadius: 300, padding: '8px 25px', width: 'auto', height: 50, margin: '0 auto', background: '#57657473', display: 'flex', flexDirection: 'column', flexFlow: 'initial', paddingRight: 20, justifyContent: 'center', alignItems: 'baseline' }}>
                                <label htmlFor style={{ textAlign: 'center', float: 'left', marginRight: 20, fontSize: 20 }}>Destinations</label>

                                {
                                    destinationListMain.isGetting && <input type="text" className="full-width" name="place" id="myplace" placeholder style={{ width: 180, background: 'none', border: 'none', height: '100%', borderLeft: '1px solid #fff', borderRadius: 0, marginRight: '0 !important', float: 'left', color: '#fff', fontSize: 20, paddingLeft: 5 }} readOnly />
                                }
                                {
                                    !destinationListMain.isGetting && <input type="text" className="full-width" name="place" id="myplace" placeholder style={{ width: 180, background: 'none', border: 'none', height: '100%', borderLeft: '1px solid #fff', borderRadius: 0, marginRight: '0 !important', float: 'left', color: '#fff', fontSize: 20, paddingLeft: 5 }} autoComplete="off" />
                                }

                            </div>
                        </BrowserView>



                        <MobileView>
                            <div>
                                <h5 style={{marginBottom: 25 , color: '#fff' , fontSize: 18,  fontWeight: 'bold'}} className="box-title"> Pakistan's Premium Travel Platform </h5>
                            </div>
                            <div style={{ border: '2px solid #fff', borderRadius: 300, padding: '8px 25px', width: 'auto', height: 50, margin: '0 auto', background: '#57657473', display: 'flex', flexDirection: 'column', flexFlow: 'initial', paddingRight: 20, justifyContent: 'center', alignItems: 'baseline' }}>
                                <label htmlFor style={{ textAlign: 'center', float: 'left', marginRight: 20, fontSize: 16, marginBottom: 6 }}>Destinations</label>
                                <input type="text" name="place" id="myplace" placeholder style={{ width: 170, background: 'none', border: 'none', height: '100%', borderLeft: '1px solid #fff', borderRadius: 0, marginRight: '0 !important', float: 'left', color: '#fff', fontSize: 20, paddingLeft: 5 }} />
                            </div>
                        </MobileView>
                        {/* <input style={{width: 180}} type="text" class="input-text full-width search" name="place" id="myplace" onKeyUp={() => searchEvent()} onkeydown="return (event.keyCode!=13);" placeholder="enter a destination or hotel name" />
                        <div id="display" style={{ display: 'none' }}>
                        </div> */}
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
