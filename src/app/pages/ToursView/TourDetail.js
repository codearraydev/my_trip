
import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native-web";
import { useState, useEffect } from 'react';

import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import renderHTML from "react-render-html";
import { Carousel } from 'react-bootstrap'
import DestDecs from '../../components/DestinationDetails/DestDecs';
import DestHotels from '../../components/DestinationDetails/DestHotels';
import { getDestInformationApi } from '../../../shared/actions/TourDetailsActions';



import { makeStyles } from '@material-ui/core/styles';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Explore from '@material-ui/icons/Explore';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Sidebar from "../../components/Sidebar";
import DestSidebar from "../../components/DestinationDetails/DestSidebar";
import ToursPlan from "../../components/TourDetails/ToursPlan";
import TourPackages from "../../components/TourDetails/TourPackages";




const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const TourDetail = props => {
    const classes = useStyles();
    const { id } = props.match.params
    const destInfo = useSelector(state => state.TourInfo);    //getting user profile
    const dispatch = useDispatch();


    useEffect(() => {
        //alert("this is id=====>>>>" + id)
        dispatch(getDestInformationApi(id))
    }, [id])

    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Tours</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Tours</li>
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
                                                destInfo.isGetting && <img src="http://placehold.it/882x320" alt />
                                            }
                                            {
                                                typeof (destInfo.TourInfo.tour) !== 'undefined' ? (
                                                    destInfo.TourInfo.tour.map((item, index) => {

                                                        return <img style={{ width: 882, height: 320, objectFit: 'cover' }} src={"https://mytrip.pk/api/app/Controllers/uploads/" + item.tour_cover} alt={item.tour_location} />
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
                                                        typeof (destInfo.TourInfo.tour) !== 'undefined' ? (
                                                            destInfo.TourInfo.tour.map((item, index) => {

                                                                return <>
                                                                    <DestDecs destinationName={"General Information About " + item.tour_location} descriptionDetails={item.tour_description} />
                                                                    {/* <div className="long-description">
                                                                        <h2>Tour Plan</h2>
                                                                        <ToursPlan destinationName={"Important Information"} descriptionDetails={"<ul id=\"proList\" style=\"list-style-type: disc\"><li>Abbottabad</li><li>Mansehra</li><li>Balakot</li><li>Kaghan</li><li>Naran</li></ul> "} />
                                                                    </div> */}
                                                                    <DestDecs destinationName={"Important Information"} descriptionDetails={item.tour_imp} />
                                                                </>
                                                            })
                                                        ) : null
                                                    }

                                                </>
                                            }

                                            {
                                                !destInfo.isGetting &&
                                                <div className="long-description">
                                                    <h2>Available Packages</h2>
                                                    <div className="block">
                                                        <div className="row image-box style1">

                                                            <TourPackages />
                                                            <TourPackages />
                                                            <TourPackages />
                                                            <TourPackages />

                                                        </div>
                                                    </div>

                                                </div>
                                            }






                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <DestSidebar /> */}
                        <div className="sidebar col-md-3">


                            {/* {
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
                                            <a className="button yellow full-width uppercase btn-small">Book Tour Now</a>
                                        </div>
                                    </article>
                                ) : <article className="detailed-logo">
                                        <figure>
                                            <img width={114} height={85} src="image.jpg" alt />
                                        </figure>
                                        <div className="details">
                                            <h2 className="box-title"><small><i className="soap-icon-departure yellow-color" /><span className="fourty-space">Pakistan</span></small></h2>
                                            <a className="button yellow full-width uppercase btn-small">Book Tour Now</a>
                                        </div>
                                    </article>
                            } */}

                            <div className="travelo-box">
                                <a className="button yellow full-width uppercase btn-small">Book Tour Now</a>
                            </div>



                            <div className="travelo-box contact-box">
                                <h4>Need Travelo Help?</h4>
                                <p>We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                                <address className="contact-details">
                                    <span className="contact-phone"><i className="soap-icon-phone" /> 1-800-123-HELLO</span>
                                    <br />
                                    <a className="contact-email" href="#">help@travelo.com</a>
                                </address>
                            </div>






                            <div className="travelo-box book-with-us-box">
                                <h4>Why Book with us?</h4>
                                <ul>
                                    <li>
                                        <i className="soap-icon-hotel-1 circle" />
                                        <h5 className="title"><a href="#">135,00+ Hotels</a></h5>
                                        <p>Nunc cursus libero pur congue arut nimspnty.</p>
                                    </li>
                                    <li>
                                        <i className="soap-icon-savings circle" />
                                        <h5 className="title"><a href="#">Low Rates &amp; Savings</a></h5>
                                        <p>Nunc cursus libero pur congue arut nimspnty.</p>
                                    </li>
                                    <li>
                                        <i className="soap-icon-support circle" />
                                        <h5 className="title"><a href="#">Excellent Support</a></h5>
                                        <p>Nunc cursus libero pur congue arut nimspnty.</p>
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

export default TourDetail;
