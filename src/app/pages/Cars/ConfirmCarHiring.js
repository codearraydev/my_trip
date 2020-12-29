import { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from "react-redux";
import SubHeader from "../../components/SubHeader";
import Footer from '../../components/Footer';
import CarActions from "../../../shared/actions/CarActions";

const ConfirmCarHiring = props => {

    const [state, setState] = useState({
        error: null,
        fullname: '',
        contact: '',
        email: '',
        person: 1,
        days: 1,
        travelfrom: '',
        depdate: null,
        returndate: null,
        message: '',
        carid: props.location.state.car_id,
        confirmBtnText: 'CONFIRM BOOKING'
    });

    const dispatch = useDispatch();

    useEffect(() => {
    }, [])
    
    function confirmBooking(event){
        event.preventDefault();

        setState({ ...state, error: null, confirmBtnText: 'PLEASE WAIT' })

        CarActions.confirmCarHire(state).then(x => {
            if(x.status == 201){
                alert('Booking Created')
                return props.history.push('/car-hire')
            }
                // return props.history.push('/car-hire-thank-you')
            alert('An error occurred')
        })
    }

    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Hotel Booking</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Hotel Booking</li>
                    </ul>
                </div>
            </div>
            <section id="content" className="gray-area">
                <div className="container">
                    <div className="row">
                        <div id="main" className="col-sms-12 col-sm-12 col-md-12">
                            <div className="booking-section travelo-box">
                                <form onSubmit={ confirmBooking } className="booking-form">
                                    <div className="person-information">
                                        <h2>Your Personal Information</h2>
                                        <div className="form-group row">
                                            <div className="col-sm-4 col-md-4">
                                                <label>Full name*</label>
                                                <input onChange={(e) => setState({...state, error: null, fullname: e.target.value}) } id="fullname" name="fullname" type="text" className="input-text full-width" value={state.fullname} placeholder="" required/>
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>email address</label>
                                                <input onChange={(e) => setState({...state, error: null, email: e.target.value}) }  id="email" name="email" type="text" className="input-text full-width" value={state.email} placeholder="" />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Phone number*</label>
                                                <input onChange={(e) => setState({...state, error: null, contact: e.target.value}) }  id="contact" name="contact" type="number" className="input-text full-width" value={state.contact} placeholder="" required />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Traveling From*</label>
                                                <input onChange={(e) => setState({...state, error: null, travelfrom: e.target.value}) }  id="travelfrom" name="travelfrom" type="text" className="input-text full-width" value={state.travelfrom} placeholder="" required />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Departure Date*</label>
                                                <input onChange={(e) => setState({...state, error: null, depdate: e.target.value}) }  id="depdate" name="depdate" type="date" className="input-text full-width" value={state.depdate} placeholder="" required />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Return Date*</label>
                                                <input onChange={(e) => setState({...state, error: null, returndate: e.target.value}) }  id="returndate" name="returndate" type="date" className="input-text full-width" value={state.returndate} placeholder="" required />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Number of Persons*</label>
                                                <input onChange={(e) => setState({...state, error: null, person: e.target.value}) }  id="person" name="person" type="text" className="input-text full-width" value={state.person} placeholder="" required />
                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <label>Number Of Days*</label>
                                                <input onChange={(e) => setState({...state, error: null, days: e.target.value}) }  id="days" name="days" type="text" className="input-text full-width" value={state.days} placeholder="" required />
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
                            </div>
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
            <br/>
        </>
    );
}

export default ConfirmCarHiring