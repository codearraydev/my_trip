import { useState, useEffect, useLayoutEffect } from 'react';
import moment from 'moment';
import { useDispatch } from "react-redux";
import SubHeader from "../../components/SubHeader";
import Footer from '../../components/Footer';
import TourBookingActions from "../../../shared/actions/TourBookingAction";
import { Helmet } from "react-helmet";


const ConfirmBookingTour = props => {




    const [fisrtLoad, setFirstLoad] = useState(true)
    useLayoutEffect(() => {
        if (fisrtLoad) {
            window.scrollTo(0, 0)
            setFirstLoad(false)
        }
        setFirstLoad(false)

    });

    const tourservicesTitles = [
        {
            checked: false,
            title: 'Hotels'
        },
        {
            checked: false,
            title: 'Transport'
        },
        {
            checked: false,
            title: 'Fuel'
        },
        {
            checked: false,
            title: 'Guide'
        },
        {
            checked: false,
            title: 'Food'
        },
        {
            checked: false,
            title: 'Air Tickets to Base city'
        },
    ];

    const [state, setState] = useState({
        error: null,
        first_name: '',
        last_name: '',
        travephone: '',
        email: '',
        travelAdult: 1,
        travelChild: 0,
        travelFrom: '',
        travelReason: 'Individual',
        travelDate: null,
        nationality: 'Pakistan',
        room_quantity: 1,
        hoteltype: 'Gold',
        message: '',
        tourservices: "",
        traveloption: "Road",
        tour_id: props.location.state.tour.tour_id,
        confirmBtnText: 'CONFIRM BOOKING',
        tour_id_related: 0
    });

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(props.location.state.tour)
    }, [])

    const checkEvent = (e) => {
        tourservicesTitles.filter(x => {
            if (state.tourservices.includes(x.title))
                x.checked = true;
        })
        tourservicesTitles.find(x => x.title.toLowerCase() == e.target.value.toLowerCase()).checked = !tourservicesTitles.find(x => x.title.toLowerCase() == e.target.value.toLowerCase()).checked;
        setState({ ...state, tourservices: tourservicesTitles.filter(y => y.checked).map(x => x.title).join(",") })
    }

    function confirmBooking(event) {
        event.preventDefault();
        if (!state.first_name || !state.travephone || !state.travelDate)
            return setState({ ...state, error: 'Please provide required information' });

        setState({ ...state, error: null, confirmBtnText: 'PLEASE WAIT' })

        TourBookingActions.confirmTourBooking({
            ...state,
            travelUser: state.first_name + ' ' + state.last_name
        }).then(x => {
            TourBookingActions.sendBookingEmail((state.first_name + ' ' + state.last_name), props.location.state.tour.dest_name, state.travephone, state.hoteltype, state.travelOption, state.travelDate, state.travelFrom, state.travelReason, state.email).then(x => {
                dispatch(x);
                return props.history.push({
                    pathname: '/tour-thank-you',
                    state: state
                })
            })
        })
    }

    return (
        <div id="page-wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Book Tour | MyTrip</title>

                <script src="http://localhost:3000/js/TourForm.js" type="text/javascript" />
                {/* <script data-b24-form="inline/4/bibmmc" data-skip-moving="true">
                    (function(w,d,u){
                    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                        })(window,document,'https://cdn.bitrix24.com/b16326669/crm/form/loader_4.js');
                </script> */}
            </Helmet>
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Tour Booking</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Tour Booking</li>
                    </ul>
                </div>
            </div>
            <section id="content" className="gray-area">
                <div className="container">
                    <div className="row">
                        <div id="main" className="col-sms-12 col-sm-12 col-md-12">

                            <iframe src={'https://b24-xtnk3r.bitrix24.site/crm_form2/'} height={1100} width={'100%'} />
                            {/* <div className="booking-section travelo-box">
                                <form onSubmit={ confirmBooking } className="booking-form">
                                    <div className="person-information">
                                        <h2>Your Personal Information</h2>
                                        <div className="form-group row">
                                            <div className="col-sm-4 col-md-4">
                                                <label>first name*</label>
                                                <input onChange={(e) => setState({...state, error: null, first_name: e.target.value}) } id="first_name" name="first_name" type="text" className="input-text full-width" value={state.first_name} placeholder="" />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>last name</label>
                                                <input onChange={(e) => setState({...state, error: null, last_name: e.target.value}) }  id="last_name" name="last_name" type="text" className="input-text full-width" value={state.last_name} placeholder="" />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>email address</label>
                                                <input onChange={(e) => setState({...state, error: null, email: e.target.value}) }  id="email" name="email" type="text" className="input-text full-width" value={state.email} placeholder="" />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Phone number*</label>
                                                <input onChange={(e) => setState({...state, error: null, travephone: e.target.value}) }  id="travephone" name="travephone" type="number" className="input-text full-width" value={state.travephone} placeholder="" />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Traveling From</label>
                                                <input onChange={(e) => setState({...state, error: null, travelFrom: e.target.value}) }  id="travelFrom" name="travelFrom" type="text" className="input-text full-width" value={state.travelFrom} placeholder="" />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Start Date*</label>
                                                <input onChange={(e) => setState({...state, error: null, travelDate: e.target.value}) }  id="travelDate" name="travelDate" type="date" className="input-text full-width" value={state.travelDate} placeholder="" />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Number of Adults*</label>
                                                <select onChange={ (e) => setState({...state, travelAdult: e.target.value}) } id="travelAdult" className="form-control">
                                                    {
                                                        [1,2,3,4,5].map((x, i) => {
                                                            return <option value={x} key={i}>{ x }</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Number of Children</label>
                                                <select onChange={ (e) => setState({...state, travelChild: e.target.value}) } id="travelChild" className="form-control">
                                                    {
                                                        [0,1,2,3,4,5].map((x, i) => {
                                                            return <option value={x} key={i}>{ x }</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Number of Rooms</label>
                                                <select onChange={ (e) => setState({...state, room_quantity: e.target.value}) } id="room_quantity" className="form-control">
                                                    {
                                                        [1,2,3,4,5].map((x, i) => {
                                                            return <option value={x} key={i}>{ x }</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Nationality</label>
                                                <input name="nationality" type="radio" value="Pakistan" checked={state.nationality === "Pakistan"} onChange={ (e) => setState({...state, nationality: e.currentTarget.value}) } /> Pakistan
                                                <br />
                                                <input name="nationality" type="radio" value="Foreigner" checked={state.nationality === "Foreigner"} onChange={ (e) => setState({...state, nationality: e.currentTarget.value}) } /> Foreigner
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Hotel Type</label>
                                                <input name="hoteltype" type="radio" value="Gold" checked={state.hoteltype === "Gold"} onChange={ (e) => setState({...state, hoteltype: e.currentTarget.value}) } /> Gold
                                                <br />
                                                <input name="hoteltype" type="radio" value="Bronze" checked={state.hoteltype === "Bronze"} onChange={ (e) => setState({...state, hoteltype: e.currentTarget.value}) } /> Bronze
                                                <br />
                                                <input name="hoteltype" type="radio" value="Standard" checked={state.hoteltype === "Standard"} onChange={ (e) => setState({...state, hoteltype: e.currentTarget.value}) } /> Standard
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Tour Services</label>
                                                {
                                                    tourservicesTitles.map(x => {
                                                        return <Checkbox checkEvent={checkEvent} title={x.title} />
                                                    })
                                                }
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Travel Option</label>
                                                <input name="traveloption" type="radio" value="Road" checked={state.traveloption === "Road"} onChange={ (e) => setState({...state, traveloption: e.currentTarget.value}) } /> By Road
                                                <br />
                                                <input name="traveloption" type="radio" value="Air" checked={state.traveloption === "Air"} onChange={ (e) => setState({...state, traveloption: e.currentTarget.value}) } /> By Air
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Traveling Reason</label>
                                                <input name="travelReason" type="radio" value="Individual" checked={state.travelReason === "Individual"} onChange={ (e) => setState({...state, travelReason: e.currentTarget.value}) } /> Individual/Family
                                                <br />
                                                <input name="travelReason" type="radio" value="Business" checked={state.travelReason === "Business"} onChange={ (e) => setState({...state, travelReason: e.currentTarget.value}) } /> Business/Corporate
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4 col-md-4">
                                                <label>Message</label>
                                                <textarea rows="5" onChange={(e) => setState({...state, error: null, message: e.target.value}) }  id="message" name="message" type="text" className="input-text full-width">{state.message}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        state.error && (<span style={ { fontWeight: 'bold', color: 'red' } }>{state.error}<br /><br /></span>)
                                    }
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-md-4"></div>
                                        <div className="col-sm-4 col-md-4">
                                            <button type="submit" className="full-width btn-large" disabled={state.confirmBtnText != 'CONFIRM BOOKING'}>{ state.confirmBtnText }</button>
                                        </div>
                                        <div className="col-sm-4 col-md-4"></div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

const Checkbox = props => {
    return (
        <>
            <input type="checkbox" value={props.title} onClick={props.checkEvent} /> {props.title}
            <br />
        </>
    );
}

export default ConfirmBookingTour