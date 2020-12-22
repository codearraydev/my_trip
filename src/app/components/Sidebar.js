import React from 'react';

export default function Sidebar() {
    return (
        <div className="sidebar col-md-3">
            <article className="detailed-logo">
                <figure>
                    <img width={114} height={85} src="http://placehold.it/114x85" alt />
                </figure>
                <div className="details">
                    <h2 className="box-title">Hilton Hotel and Resorts<small><i className="soap-icon-departure yellow-color" /><span className="fourty-space">Bastille, Paris france</span></small></h2>
                    <span className="price clearfix">
                        <small className="pull-left">avg/night</small>
                        <span className="pull-right">$620</span>
                    </span>
                    <div className="feedback clearfix">
                        <div title="4 stars" className="five-stars-container" data-toggle="tooltip" data-placement="bottom"><span className="five-stars" style={{ width: '80%' }} /></div>
                        <span className="review pull-right">270 reviews</span>
                    </div>
                    <p className="description">Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pulvinar massa idend porta nequetiam elerisque mi id, consectetur adipi deese cing elit maus fringilla bibe endum.</p>
                    <a className="button yellow full-width uppercase btn-small">add to wishlist</a>
                </div>
            </article>
            <div className="travelo-box contact-box">
                <h4>Need Travelo Help?</h4>
                <p>We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                <address className="contact-details">
                    <span className="contact-phone"><i className="soap-icon-phone" /> 1-800-123-HELLO</span>
                    <br />
                    <a className="contact-email" href="#">help@travelo.com</a>
                </address>
            </div>
            <div className="travelo-box">
                <h4>Similar Listings</h4>
                <div className="image-box style14">
                    <article className="box">
                        <figure>
                            <a href="#"><img src="http://placehold.it/63x59" alt /></a>
                        </figure>
                        <div className="details">
                            <h5 className="box-title"><a href="#">Plaza Tour Eiffel</a></h5>
                            <label className="price-wrapper">
                                <span className="price-per-unit">$170</span>avg/night
          </label>
                        </div>
                    </article>
                    <article className="box">
                        <figure>
                            <a href="#"><img src="http://placehold.it/63x59" alt /></a>
                        </figure>
                        <div className="details">
                            <h5 className="box-title"><a href="#">Sultan Gardens</a></h5>
                            <label className="price-wrapper">
                                <span className="price-per-unit">$620</span>avg/night
          </label>
                        </div>
                    </article>
                    <article className="box">
                        <figure>
                            <a href="#"><img src="http://placehold.it/63x59" alt /></a>
                        </figure>
                        <div className="details">
                            <h5 className="box-title"><a href="#">Park Central</a></h5>
                            <label className="price-wrapper">
                                <span className="price-per-unit">$322</span>avg/night
          </label>
                        </div>
                    </article>
                </div>
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

    );
}
