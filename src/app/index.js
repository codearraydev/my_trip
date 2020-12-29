
import React from 'react';
import Home from "./pages/Home";
import HotelHome from './pages/HotelsView/HotelHome';
import SideHome from "./pages/SideHome";
import HotelDetail from './pages/HotelsView/HotelDetail';
import DestinationHome from "./pages/DestinationVew/DestinationHome";
import DestinationDetails from "./pages/DestinationVew/DestinationDetails";
import TourDetail from './pages/ToursView/TourDetail';
import TourHome from './pages/ToursView/TourHome';
import HotelBooking from './pages/HotelsView/HotelBooking';
import ConfirmBooking from './pages/Booking/ConfirmBooking';

import BlogsHome from './pages/Blogs/BlogsHome';
import BlogRead from './pages/Blogs/BlogRead';
import AboutUs from './pages/AboutUs';
import ImportantPage from './pages/ImportantPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Faqpage from './pages/Faqpage';
import ThankYou from './pages/Booking/ThankYou';
import ConfirmBookingTour from './pages/Booking-Tour/ConfirmTourBooking';
import CarsHome from './pages/Cars/CarsHome';
import ConfirmCarHiring from './pages/Cars/ConfirmCarHiring';
import ThankYouCarHire from './pages/Cars/ThankYou';

const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;
const Router = require("react-router-dom").BrowserRouter;
const Redirect = require("react-router-dom").Redirect;
const useHistory = require("react-router-dom").useHistory;

const Main = props => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hotels" component={HotelHome} />
            <Route exact path="/hotels/:name/:id" component={HotelDetail} />
            <Route exact path="/hotels/book" component={HotelBooking} />
            <Route exact path="/destinations" component={DestinationHome} />
            <Route exact path="/destinations/:name/:id" component={DestinationDetails} />
            <Route exact path="/tours" component={TourHome} />
            <Route exact path="/tours/:type/:id" component={TourDetail} />
            <Route exact path="/slides" component={SideHome} />
            <Route exact name="bookingConfirmation" path="/booking-confirmation" component={ConfirmBooking} />
            <Route exact path="/blogs" component={BlogsHome} />
            <Route exact path="/blog/:slug" component={BlogRead} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/important-numbers" component={ImportantPage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/terms-of-use" component={TermsPage} />
            <Route exact path="/faq" component={Faqpage} />
            <Route exact path="/thank-you" component={ThankYou} />
            <Route exact path="/tour-booking" component={ConfirmBookingTour} />
            <Route exact path="/car-hire" component={CarsHome} />
            <Route exact path="/car-hire-confirmation" component={ConfirmCarHiring} />
            <Route exact path="/car-hire-thank-you" component={ThankYouCarHire} />
        </Switch>
    );
}

export default Main;
