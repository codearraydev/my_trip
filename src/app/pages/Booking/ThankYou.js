import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import SubHeader from '../../components/SubHeader';
import {useSelector} from 'react-redux'
import TravelerInfo from './TravelerInfo';
import ReactToPrint from 'react-to-print';

const ThankYou = (props) => {

    const state = useSelector(state => state.Booking);
    const componentRef = useRef();

    useEffect(() => {
        if(!state.bookingId)
            return props.history.push('/')
    }, [])

    return (
        <>
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Thank You</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">Pages</a></li>
                        <li className="active">Thank you</li>
                    </ul>
                </div>
            </div>
            <section id="content" className="gray-area">
                <div className="container">
                    <div className="row">
                        <div id="main" className="col-sm-8 col-md-9">
                            <div className="booking-information travelo-box">
                                <h2>Booking Confirmation</h2>
                                <hr />
                                <div className="booking-confirmation clearfix">
                                    <i className="soap-icon-recommend icon circle"></i>
                                    <div className="message">
                                        <h4 className="main-message">Thank You. Your Booking Order is Confirmed Now.</h4>
                                        <p>A confirmation email has been sent to your provided email address.</p>
                                    </div>
                                    <ReactToPrint
                                        trigger={() => <a className="button btn-small print-button uppercase">print Details</a>}
                                        content={() => componentRef}
                                    />
                                </div>
                                <hr />
                                <TravelerInfo data={ state.data } ref={componentRef} />
                                <hr />
                                <h2>Payment</h2>
                                <p>Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna, posuere ut dictum quis.</p>
                                <br />
                                <p className="red-color">Payment is made by Credit Card Via Paypal.</p>
                                <hr />
                                <h2>View Booking Details</h2>
                                <p>Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna, posuere ut dictum quis.</p>
                                <br />
                                <a href="#" className="red-color underline view-link">https://www.travelo.com/booking-details/?=f4acb19f-9542-4a5c-b8ee</a>
                            </div>
                        </div>
                        <div className="sidebar col-sm-4 col-md-3">
                            <div className="travelo-box contact-box">
                                <h4>Need Travelo Help?</h4>
                                <p>We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                                <address className="contact-details">
                                    <span className="contact-phone"><i className="soap-icon-phone"></i> 1-800-123-HELLO</span>
                                    <br />
                                    <a className="contact-email" href="#">help@travelo.com</a>
                                </address>
                            </div>
                            <div className="travelo-box book-with-us-box">
                                <h4>Why Book with us?</h4>
                                <ul>
                                    <li>
                                        <i className="soap-icon-hotel-1 circle"></i>
                                        <h5 className="title"><a href="#">135,00+ Hotels</a></h5>
                                        <p>Nunc cursus libero pur congue arut nimspnty.</p>
                                    </li>
                                    <li>
                                        <i className="soap-icon-savings circle"></i>
                                        <h5 className="title"><a href="#">Low Rates &amp; Savings</a></h5>
                                        <p>Nunc cursus libero pur congue arut nimspnty.</p>
                                    </li>
                                    <li>
                                        <i className="soap-icon-support circle"></i>
                                        <h5 className="title"><a href="#">Excellent Support</a></h5>
                                        <p>Nunc cursus libero pur congue arut nimspnty.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        </>
    );
}

export default ThankYou;