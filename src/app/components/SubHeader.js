import React from 'react';
import { Link } from 'react-router-dom';
export default function SubHeader() {
    return (
        <header id="header" className="navbar-static-top">

            <div className="main-header">
                <a href="#mobile-menu-01" data-toggle="collapse" className="mobile-menu-toggle">
                    Mobile Menu Toggle
                </a>
                <div style={{ height: 70 }} className="container">
                    <h1 className="logo navbar-brand">
                        <Link to='/'>
                            <a href="#" title="My Trip - home">
                                <img style={{ height: 33 }} src="https://www.mytrip.pk/images/my_trip_logo_lite.png" alt="Travelo HTML5 Template" />
                            </a>
                        </Link>
                    </h1>
                    <nav id="main-menu" role="navigation">
                        <ul className="menu">
                            {/* <li className="menu-item-has-children">
                                <Link to='/'>
                                    <a href="#" style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', }}>
                                        <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom', margin: '0 auto', marginBottom: 5 }} src="https://mytrip.pk/images/icons/home_ic.png" alt="icon" />


                                        <p>Home</p>
                                    </a>
                                   
                                </Link>
                            </li> */}

                            <li className="menu-item-has-children">
                                <Link to='/destinations'>
                                    {/* <a href="#">Destinations</a> */}
                                    <a href="#" style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', }}>
                                        <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom', margin: '0 auto', marginBottom: 5 }} src="https://mytrip.pk/images/icons/destination-map.png" alt="icon" />
                                        <p>Destinations</p>
                                    </a>
                                </Link>

                            </li>

                            <li className="menu-item-has-children">
                                <Link to='/hotels'>
                                    {/* <a href="#">Hotels</a> */}
                                    <a href="#" style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', }}>
                                        <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom', margin: '0 auto', marginBottom: 5 }} src="https://mytrip.pk/images/icons/hotel-icon.png" alt="icon" />
                                        <p>Hotels</p>
                                    </a>
                                </Link>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to='/car-hire'>
                                    {/* <a>Car Hire</a> */}
                                    <a href="#" style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', }}>
                                        <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom', margin: '0 auto', marginBottom: 5 }} src="https://mytrip.pk/images/icons/car-icon2.png" alt="icon" />
                                        <p>Car Hire</p>
                                    </a>
                                </Link>

                            </li>
                            <li className="menu-item-has-children">
                                {/* <a href="car-index.html">Tours</a> */}
                                <Link to='/tours'>
                                    {/* <a href="#">Tours</a> */}
                                    <a href="#" style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', }}>
                                        <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom', margin: '0 auto', marginBottom: 5 }} src="https://mytrip.pk/images/icons/tour.png" alt="icon" />
                                        <p>Tours</p>
                                    </a>
                                </Link>

                            </li>
                            <li className="menu-item-has-children">
                                {/* <a href="#">Shop</a> */}
                                <a href="#" style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', }}>
                                    <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom', margin: '0 auto', marginBottom: 5 }} src="https://mytrip.pk/images/icons/shop-icon.png" alt="icon" />
                                    <p>Shop</p>
                                </a>

                            </li>
                        </ul>
                    </nav>
                </div>
                <nav id="mobile-menu-01" className="mobile-menu collapse">
                    <ul id="mobile-primary-menu" className="menu">
                        <li className="menu-item-has-children">
                            <Link style={{ height: 70 }} to='/'>
                                {/* <a href="#" style={{ paddingTop: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                                        <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom' }} src="https://mytrip.pk/images/icons/destination-map.png" alt="icon" />
                                        <p>Home</p>
                                    </a> */}
                                {/* <a href="#">Home</a> */}
                                <a href="#" style={{ display: 'flex', flexDirection: 'row', }}>
                                    <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom' }} src="https://mytrip.pk/images/icons/home_ic.png" alt="icon" />
                                    <p style={{ marginLeft: 10 }}>Home</p>
                                </a>
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link style={{ height: 70 }} to='/destinations'>
                                {/* <a href="#">Destinations</a> */}
                                <a href="#" style={{ display: 'flex', flexDirection: 'row', }}>
                                    <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom' }} src="https://mytrip.pk/images/icons/destination-map.png" alt="icon" />
                                    <p style={{ marginLeft: 10 }}>Destinations</p>
                                </a>
                            </Link>

                        </li>

                        <li className="menu-item-has-children">
                            <Link style={{ height: 70 }} to='/hotels'>
                                {/* <a href="#">Hotels</a> */}
                                <a href="#" style={{ display: 'flex', flexDirection: 'row', }}>
                                    <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom' }} src="https://mytrip.pk/images/icons/hotel-icon.png" alt="icon" />
                                    <p style={{ marginLeft: 10 }}>Hotels</p>
                                </a>
                            </Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link style={{ height: 70 }} to='/car-hire'>
                                {/* <a>Car Hire</a> */}
                                <a href="#" style={{ display: 'flex', flexDirection: 'row', }}>
                                    <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom' }} src="https://mytrip.pk/images/icons/car-icon2.png" alt="icon" />
                                    <p style={{ marginLeft: 10 }}>Car Hire</p>
                                </a>
                            </Link>

                        </li>
                        <li className="menu-item-has-children">
                            {/* <a href="car-index.html">Tours</a> */}
                            <Link style={{ height: 70 }} to='/tours'>
                                {/* <a href="#">Tours</a> */}
                                <a href="#" style={{ display: 'flex', flexDirection: 'row', }}>
                                    <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom' }} src="https://mytrip.pk/images/icons/tour.png" alt="icon" />
                                    <p style={{ marginLeft: 10 }}>Tours</p>
                                </a>
                            </Link>

                        </li>

                        <li className="menu-item-has-children">
                            {/* <a href="car-index.html">Tours</a> */}
                            <Link style={{ height: 70 }}>
                                {/* <a href="#">Tours</a> */}
                                <a href="#" style={{ display: 'flex', flexDirection: 'row', }}>
                                    <img height={25} width={40} style={{ objectFit: 'contain', objectPosition: 'bottom' }} src="https://mytrip.pk/images/icons/shop-icon.png" alt="icon" />
                                    <p style={{ marginLeft: 10 }}>Shop</p>
                                </a>
                            </Link>

                        </li>
                       
                    </ul>
                    {/* <ul className="mobile-topnav container">
                        <li><a href="#">MY ACCOUNT</a></li>
                        <li className="ribbon language menu-color-skin">
                            <a href="#" data-toggle="collapse">ENGLISH</a>
                            <ul className="menu mini">
                                <li><a href="#" title="Dansk">Dansk</a></li>
                                <li><a href="#" title="Deutsch">Deutsch</a></li>
                                <li className="active"><a href="#" title="English">English</a></li>
                                <li><a href="#" title="Español">Español</a></li>
                                <li><a href="#" title="Français">Français</a></li>
                                <li><a href="#" title="Italiano">Italiano</a></li>
                                <li><a href="#" title="Magyar">Magyar</a></li>
                                <li><a href="#" title="Nederlands">Nederlands</a></li>
                                <li><a href="#" title="Norsk">Norsk</a></li>
                                <li><a href="#" title="Polski">Polski</a></li>
                                <li><a href="#" title="Português">Português</a></li>
                                <li><a href="#" title="Suomi">Suomi</a></li>
                                <li><a href="#" title="Svenska">Svenska</a></li>
                            </ul>
                        </li>
                        <li><a href="#travelo-login" className="soap-popupbox">LOGIN</a></li>
                        <li><a href="#travelo-signup" className="soap-popupbox">SIGNUP</a></li>
                        <li className="ribbon currency menu-color-skin">
                            <a href="#">USD</a>
                            <ul className="menu mini">
                                <li><a href="#" title="AUD">AUD</a></li>
                                <li><a href="#" title="BRL">BRL</a></li>
                                <li className="active"><a href="#" title="USD">USD</a></li>
                                <li><a href="#" title="CAD">CAD</a></li>
                                <li><a href="#" title="CHF">CHF</a></li>
                                <li><a href="#" title="CNY">CNY</a></li>
                                <li><a href="#" title="CZK">CZK</a></li>
                                <li><a href="#" title="DKK">DKK</a></li>
                                <li><a href="#" title="EUR">EUR</a></li>
                                <li><a href="#" title="GBP">GBP</a></li>
                                <li><a href="#" title="HKD">HKD</a></li>
                                <li><a href="#" title="HUF">HUF</a></li>
                                <li><a href="#" title="IDR">IDR</a></li>
                            </ul>
                        </li>
                    </ul> */}
                </nav>
            </div>


        </header >
    );
}
