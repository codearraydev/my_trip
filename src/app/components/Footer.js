import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <h2>Discover</h2>
                            <ul className="discover triangle hover row">
                                <li className="col-xs-6"><Link to='/about-us'><a href="#">About Us</a></Link></li>
                                <li className="col-xs-6"><Link to='/important-numbers'><a href="#">Important</a></Link></li>
                                <li className="col-xs-6"><Link to='/blogs'><a href="#">Blog</a></Link></li>
                                <li className="col-xs-6"><Link to='faq'><a href="#">FAQ's</a></Link></li>
                                <li className="col-xs-6"><a href="#">Contact Us</a></li>
                                <li className="col-xs-6"><Link to='/privacy'> <a href="#">Privacy</a></Link></li>
                                <li className="col-xs-6"><Link to='/terms-of-use'><a href="#">Term of Use</a></Link></li>

                            </ul>
                        </div>
                        {/* <div className="col-sm-6 col-md-3">
                            <h2>Travel News</h2>
                            <ul className="travel-news">
                                <li>
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="http://placehold.it/63x63" alt width={63} height={63} />
                                        </a>
                                    </div>
                                    <div className="description">
                                        <h5 className="s-title"><a href="#">Amazing Places</a></h5>
                                        <p>Purus ac congue arcu cursus ut vitae pulvinar massaidp.</p>
                                        <span className="date">25 Sep, 2013</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="http://placehold.it/63x63" alt width={63} height={63} />
                                        </a>
                                    </div>
                                    <div className="description">
                                        <h5 className="s-title"><a href="#">Travel Insurance</a></h5>
                                        <p>Purus ac congue arcu cursus ut vitae pulvinar massaidp.</p>
                                        <span className="date">24 Sep, 2013</span>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-sm-6 col-md-4">
                            <h2>Newletter</h2>
                            <p>Travel Smarter! Sign up for our free newsletter.</p>
                            <br />
                            <div className="icon-check">
                                <input type="text" className="input-text full-width" placeholder="your email" />
                            </div>
                            <br />
                            <span>We respect your privacy</span>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <h2>About MyTrip</h2>
                            <p>Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massaidp nequetiam lore elerisque.</p>
                            <br />
                            <address className="contact-details">
                                <span className="contact-phone"><i className="soap-icon-phone" /> 1-800-123-HELLO</span>
                                <br />
                                <a href="#" className="contact-email">info@mytrip.pk</a>
                            </address>
                            <ul className="social-icons clearfix">
                                <li className="twitter"><a title="twitter" href="#" data-toggle="tooltip"><i className="soap-icon-twitter" /></a></li>
                                <li className="googleplus"><a title="googleplus" href="#" data-toggle="tooltip"><i className="soap-icon-googleplus" /></a></li>
                                <li className="facebook"><a title="facebook" href="#" data-toggle="tooltip"><i className="soap-icon-facebook" /></a></li>
                                <li className="linkedin"><a title="linkedin" href="#" data-toggle="tooltip"><i className="soap-icon-linkedin" /></a></li>
                                <li className="vimeo"><a title="vimeo" href="#" data-toggle="tooltip"><i className="soap-icon-vimeo" /></a></li>
                                <li className="dribble"><a title="dribble" href="#" data-toggle="tooltip"><i className="soap-icon-dribble" /></a></li>
                                <li className="flickr"><a title="flickr" href="#" data-toggle="tooltip"><i className="soap-icon-flickr" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom gray-area">
                <div className="container">
                    <div className="logo pull-left">
                        <a href="/" title="Travelo - home">
                            <img style={{ height: 28 }} src="https://www.mytrip.pk/images/logo.png" alt="Travelo HTML5 Template" />
                        </a>
                    </div>
                    <div className="pull-right">
                        <a id="back-to-top" href="#" className="animated" data-animation-type="bounce"><i className="soap-icon-longarrow-up circle" /></a>
                    </div>
                    <div className="copyright pull-right">
                        <p>© 2021 MyTrip</p>
                    </div>
                </div>
            </div>
        </footer>

    );
}
