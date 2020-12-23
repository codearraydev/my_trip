
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
        </Switch>
    );
}

export default Main;
