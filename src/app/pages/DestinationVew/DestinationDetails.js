
import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native-web";
import { useState, useEffect, useLayoutEffect } from 'react';

import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import renderHTML from "react-render-html";
import { Carousel } from 'react-bootstrap'
import DestDecs from '../../components/DestinationDetails/DestDecs';
import DestHotels from '../../components/DestinationDetails/DestHotels';
import DestinationGrid from "../../components/DestinationDetails/DestinationGrid";
import PlaceGrid from "../../components/DestinationDetails/PlaceGrid";
import DestinationPlacesToSee from '../../components/DestinationDetails/DestinationPlacesToSee';
import { getDestInformationApi } from '../../../shared/actions/DestinationDetailsActions';



import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Explore from '@material-ui/icons/Explore';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Sidebar from "../../components/Sidebar";
import DestSidebar from "../../components/DestinationDetails/DestSidebar";
import HotelRooms from "../../components/HotelDetails/HotelRooms";
import HotelGrid from "../../components/HotelGrid";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const DestinationDetails = props => {
    const classes = useStyles();
    const { id } = props.match.params
    const destInfo = useSelector(state => state.DestInfo);    //getting user profile
    const dispatch = useDispatch();


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    useEffect(() => {
        //alert("this is id=====>>>>" + id)
        dispatch(getDestInformationApi(id))
    }, [id])



    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            ;
    }



    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Destination Guide</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Destination Guide</li>
                    </ul>
                </div>
            </div>


            <section id="content">
                <div className="container">
                    <div className="row">
                        <div id="main" className="col-md-9">
                            <div className="tab-container style1" id="travel-guide">
                                <div className="tab-content">


                                    <div className="tab-pane fade active in" id="travel-guide-info">
                                        <div className="image-container">
                                            {
                                                destInfo.isGetting && <p></p>
                                            }
                                            {
                                                typeof (destInfo.DestInfo.destination) !== 'undefined' ? (
                                                    destInfo.DestInfo.destination.map((item, index) => {

                                                        return <img style={{ width: 882, height: 320, objectFit: 'cover' }} src={"https://mytrip.pk/api/app/Controllers/uploads/" + item.dest_cover_image} alt={item.dest_name} />
                                                    })
                                                ) : null
                                            }

                                        </div>

                                        <div className="main-content">
                                            {
                                                destInfo.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                            }
                                            {
                                                !destInfo.isGetting &&
                                                <>
                                                    {
                                                        typeof (destInfo.DestInfo.destination) !== 'undefined' ? (
                                                            destInfo.DestInfo.destination.map((item, index) => {
                                                                return <DestDecs destinationName={"About " + item.dest_name} descriptionDetails={item.dest_description} />
                                                            })
                                                        ) : null
                                                    }

                                                    {
                                                        typeof (destInfo.DestInfo.destination) !== 'undefined' ? (
                                                            destInfo.DestInfo.destination.map((item, index) => {
                                                                if (item.activity !== "") {
                                                                    return <div className="long-description">
                                                                        <h2 style={{ borderBottom: 2, borderBottomStyle: 'solid', borderBottomColor: '#fdb714', paddingBottom: 10 }}>Location Map</h2>
                                                                        <div className="tab-container style1">
                                                                            {renderHTML(item.dest_map.replace(`width="600"`, `width = "100%"`))}
                                                                        </div>
                                                                    </div>
                                                                }

                                                            })
                                                        ) : null
                                                    }

                                                    <div className="long-description">
                                                        <h2 style={{ borderBottom: 2, borderBottomStyle: 'solid', borderBottomColor: '#fdb714', paddingBottom: 10 }}>Routes</h2>
                                                        <div className="tab-container style1">
                                                            <ul className="tabs full-width">
                                                                {
                                                                    typeof (destInfo.DestInfo.route) !== 'undefined' ? (
                                                                        destInfo.DestInfo.route.map((item, index) => {
                                                                            if (index == 0) {
                                                                                return <li className="active"><a href={"#unlimited-layouts" + item.route_id} data-toggle="tab">{item.route_name}</a></li>
                                                                            } else {
                                                                                return <li><a href={"#unlimited-layouts" + item.route_id} data-toggle="tab">{item.route_name}</a></li>
                                                                            }

                                                                        })
                                                                    ) : null
                                                                }
                                                                {/* <li className="active"><a href="#unlimited-layouts" data-toggle="tab">Unlimited Layouts</a></li>
                                                                <li><a href="#design-inovation" data-toggle="tab">Design Inovation</a></li>
                                                                <li><a href="#best-support" data-toggle="tab">Best Support</a></li>
                                                                <li><a href="#8-sliders" data-toggle="tab">8 sliders</a></li> */}
                                                            </ul>
                                                            <div className="tab-content">



                                                                {
                                                                    typeof (destInfo.DestInfo.route) !== 'undefined' ? (
                                                                        destInfo.DestInfo.route.map((item, index) => {
                                                                            if (index == 0) {
                                                                                return <div className="tab-pane fade in active" id={"unlimited-layouts" + item.route_id}>
                                                                                    <p></p>
                                                                                    <ul class="timeline">
                                                                                        {
                                                                                            item.routedetail.map((route_details, index) => {
                                                                                                return <li>
                                                                                                    <div class={route_details.r_direction}>
                                                                                                        <div class="flag-wrapper">
                                                                                                            <span class="hexa"></span>
                                                                                                            <span class="flag">{route_details.r_from + ' to ' + route_details.r_to}</span>
                                                                                                            <span class="time-wrapper">
                                                                                                                <span class="time">{'Distance: ' + route_details.r_distance}</span>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div class="desc">{'Road Conditions: ' + route_details.r_road + ' and it takes about ' + route_details.r_time + ' to travel'}</div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            })
                                                                                        }
                                                                                    </ul>
                                                                                    {/* <Timeline align="alternate">
                                                                                        {
                                                                                            item.routedetail.map((route_details, index) => {
                                                                                                return <TimelineItem style={{ marginTop: 10 }}>
                                                                                                    <TimelineOppositeContent>
                                                                                                        <Typography variant="body2" color="textSecondary">
                                                                                                            {route_details.r_from + ' to ' + route_details.r_to}
                                                                                                        </Typography>
                                                                                                    </TimelineOppositeContent>
                                                                                                    <TimelineSeparator>
                                                                                                        <TimelineDot color="primary">
                                                                                                            <Explore />
                                                                                                        </TimelineDot>
                                                                                                        <TimelineConnector />
                                                                                                    </TimelineSeparator>
                                                                                                    <TimelineContent>
                                                                                                        <Paper elevation={3} className={classes.paper}>
                                                                                                            <Typography variant="body2" color="textSecondary">
                                                                                                                {'Distance: ' + route_details.r_distance}
                                                                                                            </Typography>
                                                                                                            <Typography variant="body2" color="textPrimary">{'Road Conditions: ' + route_details.r_road + ' and it takes about ' + route_details.r_time + ' to travel'}</Typography>
                                                                                                        </Paper>
                                                                                                    </TimelineContent>
                                                                                                </TimelineItem>
                                                                                            })
                                                                                        }
                                                                                    </Timeline> */}
                                                                                </div>
                                                                            } else {
                                                                                return <div className="tab-pane fade" id={"unlimited-layouts" + item.route_id}>
                                                                                    <p></p>
                                                                                    <ul class="timeline">
                                                                                        {
                                                                                            item.routedetail.map((route_details, index) => {
                                                                                                return <li>
                                                                                                    <div class={route_details.r_direction}>
                                                                                                        <div class="flag-wrapper">
                                                                                                            <span class="hexa"></span>
                                                                                                            <span class="flag">{route_details.r_from + ' to ' + route_details.r_to}</span>
                                                                                                            <span class="time-wrapper">
                                                                                                                <span class="time">{'Distance: ' + route_details.r_distance}</span>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div class="desc">{'Road Conditions: ' + route_details.r_road + ' and it takes about ' + route_details.r_time + ' to travel'}</div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            })
                                                                                        }
                                                                                    </ul>
                                                                                    {/* <Timeline align="alternate">
                                                                                        {
                                                                                            item.routedetail.map((route_details, index) => {
                                                                                                return <TimelineItem style={{ marginTop: 10 }}>
                                                                                                    <TimelineOppositeContent>
                                                                                                        <Typography variant="body2" color="textSecondary">
                                                                                                            {route_details.r_from + ' to ' + route_details.r_to}
                                                                                                        </Typography>
                                                                                                    </TimelineOppositeContent>
                                                                                                    <TimelineSeparator>
                                                                                                        <TimelineDot color="primary">
                                                                                                            <Explore />
                                                                                                        </TimelineDot>
                                                                                                        <TimelineConnector />
                                                                                                    </TimelineSeparator>
                                                                                                    <TimelineContent>
                                                                                                        <Paper elevation={3} className={classes.paper}>
                                                                                                            <Typography variant="body2" color="textSecondary">
                                                                                                                {'Distance: ' + route_details.r_distance}
                                                                                                            </Typography>
                                                                                                            <Typography variant="body2" color="textPrimary">{'Road Conditions: ' + route_details.r_road + ' and it takes about ' + route_details.r_time + ' to travel'}</Typography>
                                                                                                        </Paper>
                                                                                                    </TimelineContent>
                                                                                                </TimelineItem>
                                                                                            })
                                                                                        }
                                                                                    </Timeline> */}
                                                                                </div>
                                                                            }

                                                                        })
                                                                    ) : null

                                                                }
                                                                {/* <div className="tab-pane fade" id="unlimited-layouts95">
                                                                    <p>Hello</p>
                                                                </div>
                                                                <div className="tab-pane fade" id="unlimited-layouts96">
                                                                    <p>ok</p>
                                                                </div>
                                                                <div className="tab-pane fade in active" id="unlimited-layouts24">
                                                                <p>DJSDLJKS</p>
                                                                </div> */}
                                                                {/* <div className="tab-pane fade in active" id="unlimited-layouts24">
                                                                    <Timeline align="alternate">
                                                                        <TimelineItem>
                                                                            <TimelineOppositeContent>
                                                                                <Typography variant="body2" color="textSecondary">
                                                                                    10:00 am
                                                                                </Typography>
                                                                            </TimelineOppositeContent>
                                                                            <TimelineSeparator>
                                                                                <TimelineDot color="primary">
                                                                                    <Explore />
                                                                                </TimelineDot>
                                                                                <TimelineConnector />
                                                                            </TimelineSeparator>
                                                                            <TimelineContent>
                                                                                <Paper elevation={3} className={classes.paper}>
                                                                                    <Typography variant="h6" component="h1">
                                                                                        Code
                                                                                    </Typography>
                                                                                    <Typography>Because it&apos;s awesome!</Typography>
                                                                                </Paper>
                                                                            </TimelineContent>
                                                                        </TimelineItem>
                                                                    </Timeline>
                                                                </div> */}
                                                                {/* <div className="tab-pane fade" id="unlimited-layouts95">
                                                                    <p>Hello</p>
                                                                </div>
                                                                <div className="tab-pane fade" id="unlimited-layouts96">
                                                                    <p>ok</p>
                                                                </div>
                                                                <div className="tab-pane fade" id="8-sliders">
                                                                </div> */}
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="long-description">
                                                        {
                                                            typeof (destInfo.DestInfo.hotels) !== 'undefined' && destInfo.DestInfo.hotels.length ? (
                                                                <>
                                                                    <h2 style={{ borderBottom: 2, borderBottomStyle: 'solid', borderBottomColor: '#fdb714', paddingBottom: 10 }}>Hotels</h2>


                                                                    

                                                                    <div className="block">
                                                                        <div style={{ display: 'block', overflowX: 'auto', flexWrap: 'nowrap' }} className="row image-box hotel listing-style1">
                                                                            {
                                                                                typeof (destInfo.DestInfo.hotels) !== 'undefined' && destInfo.DestInfo.hotels.length ? (
                                                                                    destInfo.DestInfo.hotels.map((item, index) => {
                                                                                        //  return 

                                                                                        // return <HotelGrid
                                                                                        //     picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.hotel_cover}
                                                                                        //     hotelName={item.hotel_name}
                                                                                        //     hotel_city={item.hotel_city}
                                                                                        //     hotel_desc={item.hotel_desc}
                                                                                        //     // hotel_average_price={item.hotel_average_price}
                                                                                        //     hotelLink={'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                                                        // />
                                                                                        return <DestHotels
                                                                                            roomTitle={item.hotel_name}
                                                                                            checkout={item.hotel_city}
                                                                                            hotel_desc={item.hotel_desc}
                                                                                            roomPicture={"https://mytrip.pk/api/app/Controllers/uploads/" + item.hotel_cover}
                                                                                            hotelLink={'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                                                        />

                                                                                    })
                                                                                ) : null
                                                                            }
                                                                        </div>
                                                                    </div>

                                                                </>
                                                            ) : null
                                                        }

                                                    </div>

                                                    <div className="long-description">
                                                        <h2 style={{ borderBottom: 2, borderBottomStyle: 'solid', borderBottomColor: '#fdb714', paddingBottom: 10 }}>Places To See</h2>
                                                        <div className="block">

                                                            <div className="row image-box style1">
                                                                {
                                                                    typeof (destInfo.DestInfo.places) !== 'undefined' ? (
                                                                        destInfo.DestInfo.places.map((item, index) => {
                                                                            // return <DestinationPlacesToSee
                                                                            //     place_id={item.place_id}
                                                                            //     name={item.place_name}
                                                                            //     desc={item.place_dest}
                                                                            //     image={"https://mytrip.pk/api/app/Controllers/uploads/" + item.place_image}
                                                                            // />

                                                                            return <PlaceGrid
                                                                                picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.place_image}
                                                                                destName={item.place_name}
                                                                                //destRegion={item.dest_cat_name}
                                                                                dest_desc={item.place_dest}
                                                                            // hotel_average_price={item.hotel_average_price}
                                                                            //destLink={'/destinations/details'}//{'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                                            />
                                                                        })
                                                                    ) : null
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="long-description">
                                                        <h2 style={{ borderBottom: 2, borderBottomStyle: 'solid', borderBottomColor: '#fdb714', paddingBottom: 10 }}>Weather</h2>
                                                        <div className="block">
                                                            <div className="row image-box style1">
                                                                <table style={{ width: '90%', marginLeft: 15 }} id="loadtemp" class="table">
                                                                    <tbody>
                                                                        <tr style={{ background: "#1cad81", color: "white" }}>
                                                                            <th>Months</th>
                                                                            <th>Weather Details</th>
                                                                        </tr>
                                                                        {
                                                                            typeof (destInfo.DestInfo.temperatures) !== 'undefined' ? (
                                                                                destInfo.DestInfo.temperatures.map((item, index) => {
                                                                                    return <tr>
                                                                                        <td>{item.month}</td>
                                                                                        <td>{item.desc_temp}</td>
                                                                                    </tr>
                                                                                })
                                                                            ) : null
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {
                                                        typeof (destInfo.DestInfo.destination) !== 'undefined' ? (
                                                            destInfo.DestInfo.destination.map((item, index) => {
                                                                if (item.activity !== "") {
                                                                    return <DestDecs destinationName={"Activites"} descriptionDetails={item.activity} />
                                                                }

                                                            })
                                                        ) : null
                                                    }

                                                    {
                                                        typeof (destInfo.DestInfo.destination) !== 'undefined' ? (
                                                            destInfo.DestInfo.destination.map((item, index) => {
                                                                if (item.fooditems !== "") {
                                                                    return <DestDecs destinationName={"Cuisine"} descriptionDetails={item.fooditems} />
                                                                }

                                                            })
                                                        ) : null
                                                    }

                                                    {
                                                        typeof (destInfo.DestInfo.destination) !== 'undefined' ? (
                                                            destInfo.DestInfo.destination.map((item, index) => {
                                                                if (item.cult !== "") {
                                                                    return <DestDecs destinationName={"Culture"} descriptionDetails={item.cult} />
                                                                }

                                                            })
                                                        ) : null
                                                    }
                                                </>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <DestSidebar /> */}
                        <div className="sidebar col-md-3">


                            {
                                typeof (destInfo.DestInfo.tours) !== 'undefined' ? (
                                    // destInfo.DestInfo.destination.map((item, index) => {
                                    //     if (item.cult !== "") {
                                    //         return <DestDecs destinationName={"Culture"} descriptionDetails={item.cult} />
                                    //     }

                                    // })
                                    <article className="detailed-logo">
                                        <figure>
                                            <img width={114} height={85} src={"https://mytrip.pk/api/app/Controllers/uploads/" + destInfo.DestInfo.tours[0].dest_cover_image} alt />
                                        </figure>
                                        <div className="details">
                                            <h2 className="box-title">{destInfo.DestInfo.tours[0].tour_location}<small><i className="soap-icon-departure yellow-color" /><span className="fourty-space">Pakistan</span></small></h2>
                                            <a target="_blank" href={'/tours/main/' + destInfo.DestInfo.tours[0].tour_id} className="button yellow full-width uppercase btn-small">Book Tour Now</a>
                                        </div>
                                    </article>
                                ) : <article className="detailed-logo">
                                        <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                    </article>
                            }

                            <div className="travelo-box">
                                <h4>Similar Tours</h4>
                                <div className="image-box style14">


                                    {
                                        typeof (destInfo.DestInfo.relatedtours) !== 'undefined' && destInfo.DestInfo.relatedtours.length ? (
                                            destInfo.DestInfo.relatedtours.map((item, index) => {
                                                if (item.cult !== "") {
                                                    return <article className="box">
                                                        <figure>
                                                            <a href="#"><img style={{ marginTop: 10 }} width={63} height={59} src={"https://mytrip.pk/api/app/Controllers/uploads/" + item.dest_cover_image} alt /></a>
                                                        </figure>
                                                        <div className="details">
                                                            <h5 className="box-title"><a href="#">{item.tour_location}</a></h5>
                                                            <label style={{ marginTop: 10 }} className="price-wrapper">
                                                                <span className="price-per-unit"><a href={'/tours/main/' + item.tour_id}>Book Tour</a></span>
                                                            </label>
                                                        </div>
                                                    </article>
                                                }

                                            })
                                        ) : <label style={{ marginTop: 10 }} className="price-wrapper">
                                                <span className="price-per-unit">No Related Tours Available</span>
                                            </label>
                                    }



                                </div>
                            </div>



                            <div className="travelo-box contact-box">
                                <h4>Need Travel Help?</h4>
                                <p>We would be more than happy to help you. Our customer support staff is at your service to help you.</p>
                                <address className="contact-details">
                                    <span className="contact-phone"><i className="soap-icon-phone" /> 03-111-483-222</span>
                                    <br />
                                    <a className="contact-email" href="#">info@mytrip.pk</a>
                                </address>
                            </div>






                            <div className="travelo-box book-with-us-box">
                                <h4>Why Book with us?</h4>
                                <ul>
                                    <li>
                                        <i className="soap-icon-hotel-1 circle" />
                                        <h5 className="title"><a href="#">Best Hotels</a></h5>
                                        <p>MyTrip.pk deal only with best hotels of any destination to avoid bad customer experience.</p>
                                    </li>
                                    <li>
                                        <i className="soap-icon-savings circle" />
                                        <h5 className="title"><a href="#">Expert Drivers</a></h5>
                                        <p>Our drivers have years of experience and serve as guides.</p>
                                    </li>
                                    <li>
                                        <i className="soap-icon-support circle" />
                                        <h5 className="title"><a href="#">Helpline</a></h5>
                                        <p>We have 24/7 helpline for customer support</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* ********************************************************* */}
                    </div>
                </div>
            </section>


            <Footer />
        </div >
    );
}

export default DestinationDetails;
