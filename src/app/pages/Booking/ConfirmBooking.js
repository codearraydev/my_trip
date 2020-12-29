import { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from "react-redux";
import SubHeader from "../../components/SubHeader";
import Footer from '../../components/Footer';
import ConfirmBookingActions from "../../../shared/actions/BookingAction";

const ConfirmBooking = props => {

    const [state, setState] = useState({
        error: null,
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        confirmBtnText: 'CONFIRM BOOKING'
    });

    useEffect(() => {
        if(!props.location.state)
            return props.history.push('/hotels')

    }, [])

    const dispatch = useDispatch();
    
    function confirmBooking(event){
        event.preventDefault();
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        if(!first_name || !phone)
            return setState({error: 'Please provide required information', first_name: first_name, last_name: last_name, phone: phone, email: email, confirmBtnText: 'CONFIRM BOOKING' });

        setState({error: null, first_name: state.first_name, last_name: state.last_name, phone: state.phone, email: state.email, confirmBtnText: 'PLEASE WAIT' })

        ConfirmBookingActions.confirmBooking({
            hotel_id : props.location.state.hotel_id,
            room_id : props.location.state.room_id,
            checkin : moment(props.location.state.ranges[0].startDate).format("YYYY-MM-DD HH:mm:ss"),
            checkout :  moment(props.location.state.ranges[0].endDate).format("YYYY-MM-DD HH:mm:ss"),
            numofrooms : props.location.state.rooms,
            full_name : first_name+' '+last_name,
            email_address : email,
            mobile_no : phone,
            landLine_no : phone,
            address : "",
            city : "",
            country : "",
            special_requirements : ""
        }).then(x => {
            ConfirmBookingActions.sendBookingEmail(
                first_name+' '+last_name,
                props.location.state.hotel.hotel.hotel_name,
                phone,
                props.location.state.rooms,
                moment(props.location.state.ranges[0].startDate).format("YYYY-MM-DD HH:mm:ss"),
                moment(props.location.state.ranges[0].endDate).format("YYYY-MM-DD HH:mm:ss"),
                props.location.state.price*props.location.state.rooms,
                moment(props.location.state && props.location.state.ranges[0].endDate).diff(moment(props.location.state && props.location.state.ranges[0].startDate), 'days'),
                props.location.state.price,
                email
            ).then(x => {
                dispatch(x);
                props.history.push('/thank-you')
            })
        })
    }

    function changeEvent(e){
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        setState({error: null, first_name: first_name, last_name: last_name, phone: phone, email: email, confirmBtnText: 'CONFIRM BOOKING' });
    }

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
                        <li class="active">Hotel Booking</li>
                    </ul>
                </div>
            </div>
            <section id="content" className="gray-area">
                <div className="container">
                    <div className="row">
                        <div id="main" class="col-sms-6 col-sm-8 col-md-9">
                            <div class="booking-section travelo-box">
                                <form onSubmit={ confirmBooking } class="booking-form">
                                    <div class="person-information">
                                        <h2>Your Personal Information</h2>
                                        <div class="form-group row">
                                            <div class="col-sm-6 col-md-5">
                                                <label>first name*</label>
                                                <input onChange={changeEvent} id="first_name" name="first_name" type="text" class="input-text full-width" value={state.first_name} placeholder="" />
                                            </div>
                                            <div class="col-sm-6 col-md-5">
                                                <label>last name</label>
                                                <input onChange={changeEvent} id="last_name" name="last_name" type="text" class="input-text full-width" value={state.last_name} placeholder="" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 col-md-5">
                                                <label>email address*</label>
                                                <input onChange={changeEvent} id="email" name="email" type="text" class="input-text full-width" value={state.email} placeholder="" />
                                            </div>
                                            <div class="col-sm-6 col-md-5">
                                                <label>Phone number*</label>
                                                <input onChange={changeEvent} id="phone" name="phone" type="number" class="input-text full-width" value={state.phone} placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="card-information">
                                        <h2>Your Card Information</h2>
                                        <div class="form-group row">
                                            <div class="col-sm-6 col-md-5">
                                                <label>Credit Card Type</label>
                                                <div class="selector">
                                                    <select class="full-width">
                                                        <option>select a card</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-5">
                                                <label>Card holder name</label>
                                                <input type="text" class="input-text full-width" value="" placeholder="" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 col-md-5">
                                                <label>Card number</label>
                                                <input type="text" class="input-text full-width" value="" placeholder="" />
                                            </div>
                                            <div class="col-sm-6 col-md-5">
                                                <label>Card identification number</label>
                                                <input type="text" class="input-text full-width" value="" placeholder="" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 col-md-5">
                                                <label>Expiration Date</label>
                                                <div class="constant-column-2">
                                                    <div class="selector">
                                                        <select class="full-width">
                                                            <option>month</option>
                                                        </select>
                                                    </div>
                                                    <div class="selector">
                                                        <select class="full-width">
                                                            <option>year</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-md-2">
                                                <label>billing zip code</label>
                                                <input type="text" class="input-text full-width" value="" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr /> */}
                                    {/* <div class="form-group">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox"/> By continuing, you agree to the <a href="#"><span
                                                        class="skin-color">Terms and Conditions</span></a>.
                                            </label>
                                        </div>
                                    </div> */}
                                    {
                                        state.error && (<span style={ { fontWeight: 'bold', color: 'red' } }>{state.error}<br /><br /></span>)
                                    }
                                    <div class="form-group row">
                                        <div class="col-sm-6 col-md-5">
                                            <button type="submit" class="full-width btn-large" disabled={state.confirmBtnText != 'CONFIRM BOOKING'}>{ state.confirmBtnText }</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="sidebar col-sms-6 col-sm-4 col-md-3">
                            <div class="booking-details travelo-box">
                                <h4>Booking Details</h4>
                                <article class="image-box hotel listing-style1">
                                    <figure class="clearfix">
                                        <a href="hotel-detailed.html" class="hover-effect middle-block"><img
                                                class="middle-item" width="270" height="160" alt=""
                                                src="http://placehold.it/270x160" /></a>
                                        <div class="travel-title">
                                            <h5 class="box-title">{ props.location.state && props.location.state.hotel.hotel.hotel_name }<small>{ props.location.state && props.location.state.hotel.hotel.hotel_city }</small></h5>
                                        </div>
                                    </figure>
                                    <div class="details">
                                        <div class="constant-column-3 timing clearfix">
                                            <div class="check-in">
                                                <label>Check in</label>
                                                <span>{moment(props.location.state && props.location.state.ranges[0].startDate).format("MMM DD, YYYY")}</span>
                                            </div>
                                            <div class="duration text-center">
                                                <i class="soap-icon-clock"></i>
                                                <span>{moment(props.location.state && props.location.state.ranges[0].endDate).diff(moment(props.location.state && props.location.state.ranges[0].startDate), 'days') } Nights</span>
                                            </div>
                                            <div class="check-out">
                                                <label>Check out</label>
                                                <span>{moment(props.location.state && props.location.state.ranges[0].endDate).format("MMM DD, YYYY")}</span>
                                            </div>
                                        </div>
                                        <div class="guest">
                                            <small class="uppercase">{ props.location.state && props.location.state.rooms } { props.location.state && props.location.state.room_type } room
                                            </small>
                                        </div>
                                    </div>
                                </article>
                                <h4>Other Details</h4>
                                <dl class="other-details">
                                    <dt class="feature">room Type:</dt>
                                    <dd class="value">{ props.location.state && props.location.state.room_type }</dd>
                                    <dt class="feature">per Room price:</dt>
                                    <dd class="value">-</dd>
                                    <dt class="feature">2 night Stay:</dt>
                                    <dd class="value">-</dd>
                                    <dt class="feature">taxes and fees:</dt>
                                    <dd class="value">-</dd>
                                    <dt class="total-price">Total Price</dt>
                                    <dd class="total-price-value">PKR. { props.location.state && props.location.state.price*props.location.state.rooms * (moment(props.location.state && props.location.state.ranges[0].endDate).diff(moment(props.location.state && props.location.state.ranges[0].startDate), 'days') == 0 ? 1 : moment(props.location.state && props.location.state.ranges[0].endDate).diff(moment(props.location.state && props.location.state.ranges[0].startDate), 'days')) }</dd>
                                </dl>
                            </div>
                            <div class="travelo-box contact-box">
                                <h4>Need Travelo Help?</h4>
                                <p>We would be more than happy to help you. Our team advisor are 24/7 at your service to
                                    help you.</p>
                                <address class="contact-details">
                                    <span class="contact-phone"><i class="soap-icon-phone"></i> 1-800-123-HELLO</span>
                                    <br/>
                                    <a class="contact-email" href="#">help@travelo.com</a>
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

export default ConfirmBooking;