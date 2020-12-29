import { useState, useEffect } from 'react';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import { connect, useSelector, useDispatch } from "react-redux";

const HotelBooking = props => {

    //const { data } = props.location

    // alert(JSON.stringify(props.location.data));
    const [data, setData] = useState('');
    //const hotelDetail = useSelector(state => state.HotelName);    //getting user profile
    let myData
    useEffect(() => {
        // myData = JSON.parse(props.location.data)
        //setData(myData)

        //console.log(props.location)
        // alert(myData)
        // dispatch(getHotelInformationApi(id))
    }, [])
    return (
        <div id="page-wrapper">
            <SubHeader />


            <div class="page-title-container">
                <div class="container">
                    <div class="page-title pull-left">
                        <h2 class="entry-title">Hotel Booking</h2>
                    </div>
                    <ul class="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li class="active">{ }</li>
                    </ul>
                </div>
            </div>

            <section id="content" className="gray-area">
                <div className="container">
                    <div className="row">
                        <div id="main" className="col-sms-6 col-sm-8 col-md-9">
                            <div className="booking-section travelo-box">
                                <div className="person-information">
                                    <h2>Your Personal Information</h2>
                                    <div className="form-group row">
                                        <div className="col-sm-6 col-md-5">
                                            <label>First Name </label>
                                            <input type="text" className="input-text full-width" defaultValue placeholder />
                                        </div>
                                        <div className="col-sm-6 col-md-5">
                                            <label>last name</label>
                                            <input type="text" className="input-text full-width" defaultValue placeholder />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 col-md-5">
                                            <label>email address</label>
                                            <input type="text" className="input-text full-width" defaultValue placeholder />
                                        </div>
                                        <div className="col-sm-6 col-md-5">
                                            <label>Verify E-mail Address</label>
                                            <input type="text" className="input-text full-width" defaultValue placeholder />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 col-md-5">
                                            <label>Phone number</label>
                                            <input type="text" className="input-text full-width" defaultValue placeholder />
                                        </div>
                                        <div className="col-sm-6 col-md-5">
                                            <label>Phone number</label>
                                            <input type="text" className="input-text full-width" defaultValue placeholder />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> I want to receive <span className="skin-color">Travelo</span> promotional offers in the future
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="sidebar col-sms-6 col-sm-4 col-md-3">
                            <div className="booking-details travelo-box">
                                <h4>Booking Details</h4>
                                <article className="image-box hotel listing-style1">
                                    <figure className="clearfix">
                                        <a href="hotel-detailed.html" className="hover-effect middle-block"><img className="middle-item" width={270} height={160} alt src="http://placehold.it/270x160" /></a>
                                        <div className="travel-title">
                                            <h5 className="box-title">Hotel Hilton<small>Paris france</small></h5>
                                            <a href="hotel-detailed.html" className="button">EDIT</a>
                                        </div>
                                    </figure>
                                    <div className="details">
                                        <div className="feedback">
                                            <div data-placement="bottom" data-toggle="tooltip" className="five-stars-container" title="4 stars"><span style={{ width: '80%' }} className="five-stars" /></div>
                                            <span className="review">270 reviews</span>
                                        </div>
                                        <div className="constant-column-3 timing clearfix">
                                            <div className="check-in">
                                                <label>Check in</label>
                                                <span>NOV 30, 2013<br />11 AM</span>
                                            </div>
                                            <div className="duration text-center">
                                                <i className="soap-icon-clock" />
                                                <span>2 Nights</span>
                                            </div>
                                            <div className="check-out">
                                                <label>Check out</label>
                                                <span>DEC 02, 2013<br />2 PM</span>
                                            </div>
                                        </div>
                                        <div className="guest">
                                            <small className="uppercase">1 Standard family room for <span className="skin-color">3 Persons</span></small>
                                        </div>
                                    </div>
                                </article>
                                <h4>Other Details</h4>
                                <dl className="other-details">
                                    <dt className="feature">room Type:</dt><dd className="value">Standard Family</dd>
                                    <dt className="feature">per Room price:</dt><dd className="value">$121</dd>
                                    <dt className="feature">2 night Stay:</dt><dd className="value">$242</dd>
                                    <dt className="feature">taxes and fees:</dt><dd className="value">$10</dd>
                                    <dt className="total-price">Total Price</dt><dd className="total-price-value">$252</dd>
                                </dl>
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
                        </div>


                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default HotelBooking;
