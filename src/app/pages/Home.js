import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = props => {
    return (
        <div id="page-wrapper">
            <Header />
            <section id="content">
                <div className="search-box-wrapper">
                    <div className="search-box container">
                        <ul className="search-tabs clearfix">
                            <li className="active"><a href="#hotels-tab" data-toggle="tab">HOTELS</a></li>
                            <li><a href="#flights-tab" data-toggle="tab">FLIGHTS</a></li>
                            <li><a href="#flight-and-hotel-tab" data-toggle="tab">FLIGHT &amp; HOTELS</a></li>
                            <li><a href="#cars-tab" data-toggle="tab">CARS</a></li>
                            <li><a href="#cruises-tab" data-toggle="tab">CRUISES</a></li>
                            <li><a href="#flight-status-tab" data-toggle="tab">FLIGHT STATUS</a></li>
                            <li><a href="#online-checkin-tab" data-toggle="tab">ONLINE CHECK IN</a></li>
                        </ul>
                        <div className="visible-mobile">
                            <ul id="mobile-search-tabs" className="search-tabs clearfix">
                                <li className="active"><a href="#hotels-tab">HOTELS</a></li>
                                <li><a href="#flights-tab">FLIGHTS</a></li>
                                <li><a href="#flight-and-hotel-tab">FLIGHT &amp; HOTELS</a></li>
                                <li><a href="#cars-tab">CARS</a></li>
                                <li><a href="#cruises-tab">CRUISES</a></li>
                                <li><a href="#flight-status-tab">FLIGHT STATUS</a></li>
                                <li><a href="#online-checkin-tab">ONLINE CHECK IN</a></li>
                            </ul>
                        </div>
                        <div className="search-tab-content">
                            <div className="tab-pane fade active in" id="hotels-tab">
                                <form action="hotel-list-view.html" method="post">
                                    <div className="row">
                                        <div className="form-group col-sm-6 col-md-3">
                                            <h4 className="title">Where</h4>
                                            <label>Your Destination</label>
                                            <input type="text" className="input-text full-width"
                                                placeholder="enter a destination or hotel name" />
                                        </div>
                                        <div className="form-group col-sm-6 col-md-4">
                                            <h4 className="title">When</h4>
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <label>Check In</label>
                                                    <div className="datepicker-wrap">
                                                        <input type="text" className="input-text full-width"
                                                            placeholder="mm/dd/yy" />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Check Out</label>
                                                    <div className="datepicker-wrap">
                                                        <input type="text" className="input-text full-width"
                                                            placeholder="mm/dd/yy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-6 col-md-3">
                                            <h4 className="title">Who</h4>
                                            <div className="row">
                                                <div className="col-xs-4">
                                                    <label>Rooms</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4">
                                                    <label>Adults</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4">
                                                    <label>Kids</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-6 col-md-2 fixheight">
                                            <label className="hidden-xs">&nbsp;</label>
                                            <button type="submit" className="full-width icon-check animated"
                                                data-animation-type="bounce" data-animation-duration="1">SEARCH NOW</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="flights-tab">
                                <form action="flight-list-view.html" method="post">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h4 className="title">Where</h4>
                                            <div className="form-group">
                                                <label>Leaving From</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="city, distirct or specific airpot" />
                                            </div>
                                            <div className="form-group">
                                                <label>Going To</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="city, distirct or specific airpot" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="title">When</h4>
                                            <label>Departing On</label>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <div className="datepicker-wrap">
                                                        <input type="text" className="input-text full-width"
                                                            placeholder="mm/dd/yy" />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">anytime</option>
                                                            <option value="2">morning</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <label>Arriving On</label>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <div className="datepicker-wrap">
                                                        <input type="text" className="input-text full-width"
                                                            placeholder="mm/dd/yy" />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">anytime</option>
                                                            <option value="2">morning</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="title">Who</h4>
                                            <div className="form-group row">
                                                <div className="col-xs-3">
                                                    <label>Adults</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3">
                                                    <label>Kids</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Promo Code</label>
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="type here" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-xs-3">
                                                    <label>Infants</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 pull-right">
                                                    <label>&nbsp;</label>
                                                    <button className="full-width icon-check">SERACH NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="flight-and-hotel-tab">
                                <form action="flight-list-view.html" method="post">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h4 className="title">Where</h4>
                                            <div className="form-group">
                                                <label>Leaving From</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="city, distirct or specific airpot" />
                                            </div>
                                            <div className="form-group">
                                                <label>Going To</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="city, distirct or specific airpot" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="title">When</h4>
                                            <label>Departing On</label>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <div className="datepicker-wrap">
                                                        <input type="text" className="input-text full-width"
                                                            placeholder="mm/dd/yy" />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">anytime</option>
                                                            <option value="2">morning</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <label>Arriving On</label>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <div className="datepicker-wrap">
                                                        <input type="text" className="input-text full-width"
                                                            placeholder="mm/dd/yy" />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">anytime</option>
                                                            <option value="2">morning</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="title">Who</h4>
                                            <div className="form-group row">
                                                <div className="col-xs-3">
                                                    <label>Adults</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3">
                                                    <label>Kids</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Promo Code</label>
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="type here" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-xs-3">
                                                    <label>Rooms</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 pull-right">
                                                    <label>&nbsp;</label>
                                                    <button className="full-width icon-check">SERACH NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="cars-tab">
                                <form action="car-list-view.html" method="post">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h4 className="title">Where</h4>
                                            <div className="form-group">
                                                <label>Pick Up</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="city, distirct or specific airpot" />
                                            </div>
                                            <div className="form-group">
                                                <label>Drop Off</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="city, distirct or specific airpot" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="title">When</h4>
                                            <div className="form-group">
                                                <label>Pick-Up Date / Time</label>
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="datepicker-wrap">
                                                            <input type="text" className="input-text full-width"
                                                                placeholder="mm/dd/yy" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <div className="selector">
                                                            <select className="full-width">
                                                                <option value="1">anytime</option>
                                                                <option value="2">morning</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Drop-Off Date / Time</label>
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="datepicker-wrap">
                                                            <input type="text" className="input-text full-width"
                                                                placeholder="mm/dd/yy" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <div className="selector">
                                                            <select className="full-width">
                                                                <option value="1">anytime</option>
                                                                <option value="2">morning</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="title">Who</h4>
                                            <div className="form-group row">
                                                <div className="col-xs-3">
                                                    <label>Adults</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3">
                                                    <label>Kids</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Promo Code</label>
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="type here" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <label>Car Type</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="">select a car type</option>
                                                            <option value="economy">Economy</option>
                                                            <option value="compact">Compact</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>&nbsp;</label>
                                                    <button className="full-width icon-check">SERACH NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="cruises-tab">
                                <form action="cruise-list-view.html" method="post">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h4 className="title">Where</h4>
                                            <div className="form-group">
                                                <label>Your Destination</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="enter a destination or hotel name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="title">When</h4>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <label>Departure Date</label>
                                                    <div className="datepicker-wrap">
                                                        <input type="text" className="input-text full-width"
                                                            placeholder="mm/dd/yy" />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Cruise Length</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="">select length</option>
                                                            <option value="1">1-2 Nights</option>
                                                            <option value="2">3-4 Nights</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="title">Who</h4>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <label>Cruise Line</label>
                                                    <div className="selector">
                                                        <select className="full-width">
                                                            <option value="">select cruise line</option>
                                                            <option>Azamara Club Cruises</option>
                                                            <option>Carnival Cruise Lines</option>
                                                            <option>Celebrity Cruises</option>
                                                            <option>Costa Cruise Lines</option>
                                                            <option>Cruise &amp; Maritime Voyages</option>
                                                            <option>Crystal Cruises</option>
                                                            <option>Cunard Line Ltd.</option>
                                                            <option>Disney Cruise Line</option>
                                                            <option>Holland America Line</option>
                                                            <option>Hurtigruten Cruise Line</option>
                                                            <option>MSC Cruises</option>
                                                            <option>Norwegian Cruise Line</option>
                                                            <option>Oceania Cruises</option>
                                                            <option>Orion Expedition Cruises</option>
                                                            <option>P&amp;O Cruises</option>
                                                            <option>Paul Gauguin Cruises</option>
                                                            <option>Peter Deilmann Cruises</option>
                                                            <option>Princess Cruises</option>
                                                            <option>Regent Seven Seas Cruises</option>
                                                            <option>Royal Caribbean International</option>
                                                            <option>Seabourn Cruise Line</option>
                                                            <option>Silversea Cruises</option>
                                                            <option>Star Clippers</option>
                                                            <option>Swan Hellenic Cruises</option>
                                                            <option>Thomson Cruises</option>
                                                            <option>Viking River Cruises</option>
                                                            <option>Windstar Cruises</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>&nbsp;</label>
                                                    <button className="icon-check full-width">SEARCH NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="flight-status-tab">
                                <form action="flight-list-view.html" method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="title">Where</h4>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <label>Leaving From</label>
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="enter a city or place name" />
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Going To</label>
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="enter a city or place name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-2">
                                            <h4 className="title">When</h4>
                                            <div className="form-group">
                                                <label>Departure Date</label>
                                                <div className="datepicker-wrap">
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="mm/dd/yy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-2">
                                            <h4 className="title">Who</h4>
                                            <div className="form-group">
                                                <label>Flight Number</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="enter flight number" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-2 fixheight">
                                            <label className="hidden-xs">&nbsp;</label>
                                            <button className="icon-check full-width">SEARCH NOW</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="online-checkin-tab">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="title">Where</h4>
                                            <div className="form-group row">
                                                <div className="col-xs-6">
                                                    <label>Leaving From</label>
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="enter a city or place name" />
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Going To</label>
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="enter a city or place name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-2">
                                            <h4 className="title">When</h4>
                                            <div className="form-group">
                                                <label>Departure Date</label>
                                                <div className="datepicker-wrap">
                                                    <input type="text" className="input-text full-width"
                                                        placeholder="mm/dd/yy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-2">
                                            <h4 className="title">Who</h4>
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input type="text" className="input-text full-width"
                                                    placeholder="enter your full name" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-2 fixheight">
                                            <label className="hidden-xs">&nbsp;</label>
                                            <button className="icon-check full-width">SEARCH NOW</button>
                                        </div>
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

export default Home;
