import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, TouchableOpacity, View, Button, Text } from "react-native-web";
import { useState, useEffect } from 'react';

import SubHeader from "../../components/SubHeader";
import Footer from '../../components/Footer';
import DestinationList from "../../components/DestinationDetails/DestintionList";
import DestinationGrid from "../../components/DestinationDetails/DestinationGrid";

import { fetchToursFromApi } from "../../../shared/actions/TourActions";
import DestinationBlock from "../../components/DestinationDetails/DestinationBlock";


const TourHome = props => {

    const [gridClass, setGridClass] = useState('swap-grid');
    const [showList, setList] = useState(false);
    const [showGrid, setGrid] = useState(false);
    const [showBlock, setBlock] = useState(true)


    //redux
    const destinationList = useSelector(state => state.Tours);    //getting user profile
    const dispatch = useDispatch();


    const loadGrid = () => {
        setList(false)
        setGrid(true)
        setBlock(false)
    }

    const loadList = () => {
        setList(true)
        setGrid(false)
        setBlock(false)
    }

    const loadblock = () => {
        setList(false)
        setGrid(false)
        setBlock(true)
    }

    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            ;
    }


    const initialFIlters = JSON.stringify({ "region": null, "type": null, "style": null, "duration": null, "terrain": null, "travel_act": null, "basecity": null });

    useEffect(() => {
        dispatch(fetchToursFromApi(initialFIlters))
    }, [])



    const durationItems = [
        {
            "name": "Day Trip",
            "title": "Day Trip"
        },
        {
            "name": "Multi Days",
            "title": "Multi Days"
        }
    ];

    const regionItems = [
        {
            "name": "\'1\'",
            "title": "KPK"
        },
        {
            "name": "\'6\'",
            "title": "Gilgit Baltistan"
        },
        {
            "name": "\'7\'",
            "title": "Azad Kashmir"
        },
        {
            "name": "\'3\'",
            "title": "Punjab"
        },
        {
            "name": "\'4\'",
            "title": "Sindh"
        },
        {
            "name": "\'5\'",
            "title": "Balochistan"
        }
    ];


    const activityItems = [
        {
            "name": "sight",
            "title": "Sight Seeing"
        },
        {
            "name": "flying",
            "title": "Flying"
        },
        {
            "name": "camp",
            "title": "Camping"
        },
        {
            "name": "fishing",
            "title": "Fishing"
        },
        {
            "name": "water",
            "title": "Water Sports"
        },
        {
            "name": "cycling",
            "title": "Cycling"
        }
    ];


    const mainFilters = [
        {
            "name": "sight",
            "title": "Leisure"
        },
        {
            "name": "flying",
            "title": "Honeymoon"
        },
        {
            "name": "camp",
            "title": "Acitivity Based"
        },
        {
            "name": "fishing",
            "title": "Archaeological"
        }
    ];


    const [durationFilter, setDurationFilter] = useState('');
    const [regionsFilter, setRegionsFilter] = useState([]);
    const [generalFilters, setGeneralFilters] = useState([]);
    const [actFilters, setActFilters] = useState([]);
    //const [regionsFilter, setRegionsFilter] = useState([]);
    const findTours = (target, param) => {

        let regions = regionsFilter;
        // let duration = durationFilter;
        let generalTours = generalFilters;
        let act = actFilters;



        // if (param === 'duration') {
        //     if (duration.includes(target.getAttribute('title')))
        //         duration = duration.filter(x => x != target.getAttribute('title'))
        //     else
        //         duration = target.getAttribute('title')
        //     // regions.push(target.getAttribute('title'))
        //     setDurationFilter(regions)
        // }


        if (param === "region") {
            if (regions.includes(target.getAttribute('title')))
                regions = regions.filter(x => x != target.getAttribute('title'))
            else
                regions.push(target.getAttribute('title'))
            setRegionsFilter(regions)
        }


        if (param === "activity") {
            if (act.includes(target.getAttribute('title')))
                act = act.filter(x => x != target.getAttribute('title'))
            else
                act.push(target.getAttribute('title'))
            setActFilters(act)
        }




        if (param === "main") {
            console.log('No action Required')
            if (generalTours.includes(target.getAttribute('title')))
                generalTours = generalTours.filter(x => x != target.getAttribute('title'))
            else
                generalTours.push(target.getAttribute('title'))
            setGeneralFilters(generalTours)
        }




        if (target.parentElement.classList.contains('active'))
            target.parentElement.classList.remove('active')
        else
            target.parentElement.classList.add('active')



        console.log("Region : ===>>>" + regions)
        //console.log("Duration : ===>>>" + duration)
        console.log("General : ===>>>" + generalTours)
        // let myChecks = {
        //     "type": null,
        //     "style": (general.length > 0) ? general.join(" , ") : null,
        //     "duration": null,
        //     "terrain": null,
        //     "travel_act": null,
        //     "basecity": null
        // }

        let myChecks = {
            "region": (regions.length > 0) ? regions.join(" , ") : null,
            "type": null,
            "style": (generalTours.length > 0) ? generalTours.join(" , ") : null,
            "duration": null,
            "terrain": null,
            "travel_act": (act.length > 0) ? act.join(" , ") : null,
            "basecity": null
        }

        let data = JSON.stringify(myChecks);

        console.log(data)

        dispatch(fetchToursFromApi(data))
    }
    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Available Tours</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Available Tours</li>
                    </ul>
                </div>
            </div>


            <section id="content">
                <div className="container">
                    <div id="main">
                        <div className="row">
                            {/*  Search Filters */}
                            <div className="col-sm-4 col-md-3">

                                <div className="toggle-container filters-container">
                                    <h4 className="search-results-title"><i className="soap-icon-search" /><b>Filters</b></h4>

                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#accomodation-type-filter" className="collapsed">Duration</a>
                                        </h4>
                                        <div id="accomodation-type-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <ul className="check-square filters-option">
                                                    {
                                                        durationItems.map((item, index) => {
                                                            // console.log(JSON.stringify(item));
                                                            return (
                                                                <li>
                                                                    <a title={item.name} onClick={(e) => { findTours(e.target, "duration") }}>
                                                                        {item.title}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#region-type-filter" className="collapsed">Region</a>
                                        </h4>
                                        <div id="region-type-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <ul className="check-square filters-option">
                                                    {
                                                        regionItems.map((item, index) => {
                                                            // console.log(JSON.stringify(item));
                                                            return (
                                                                <li>
                                                                    <a title={item.name} onClick={(e) => { findTours(e.target, "region") }}>
                                                                        {item.title}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#act-type-filter" className="collapsed">Activities</a>
                                        </h4>
                                        <div id="act-type-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <ul className="check-square filters-option">
                                                    {
                                                        activityItems.map((item, index) => {
                                                            // console.log(JSON.stringify(item));
                                                            return (
                                                                <li>
                                                                    <a title={item.name} onClick={(e) => { findTours(e.target, "activity") }}>
                                                                        {item.title}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="col-sm-8 col-md-9">
                                <div className="sort-by-section clearfix">
                                    <h4 class="panel-content sort-by-title block-sm">Sort:</h4>
                                    <ul class="check-square filters-option">
                                        {/* {
                                            mainFilters.map((item, index) => {
                                                // console.log(JSON.stringify(item));
                                                return (
                                                    // <li>
                                                    //     <a style={{ cursor: 'pointer' }} title={item.name} onClick={(e) => { findTours(e.target, "main") }}>
                                                    //         <span>{item.title}</span>
                                                    //     </a>
                                                    // </li>

                                                    {
                                                        durationItems.map((item, index) => {
                                                            // console.log(JSON.stringify(item));
                                                            return (
                                                                <li>
                                                                    <a title={item.name} onClick={(e) => { findTours(e.target, "duration") }}>
                                                                        {item.title}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                )
                                            })
                                        } */}
                                        {
                                            mainFilters.map((item, index) => {
                                                // console.log(JSON.stringify(item));
                                                return (
                                                    <li style={{ cursor: 'pointer', marginLeft: 10, borderRadius: 4, marginTop: 4 }}>
                                                        <a class="button btn-small-tour blue" title={item.name} onClick={(e) => { findTours(e.target, "duration") }}>
                                                            {item.title}
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                    {/* <ul className="swap-tiles clearfix block-sm">
                                        <li className="swap-block">
                                            <TouchableOpacity onPress={() => loadblock()}>
                                                <a href="#"><i className="soap-icon-block" /></a>
                                            </TouchableOpacity>
                                        </li>

                                        <li className="swap-list active">
                                            <TouchableOpacity onPress={() => loadList()}>
                                                <a href="#"><i className="soap-icon-list" /></a>
                                            </TouchableOpacity>
                                        </li>
                                        <li className={gridClass}>
                                            <TouchableOpacity onPress={() => loadGrid()}>
                                                <a href="#"><i className="soap-icon-grid" /></a>
                                            </TouchableOpacity>
                                        </li>

                                    </ul> */}
                                </div>

                                <br /><br />
                                <div className="sort-by-section clearfix">

                                    <h4 class="panel-content sort-by-title block-sm">Select Your Tour:</h4>
                                    <ul className="swap-tiles clearfix block-sm">
                                        <li className="swap-block">
                                            <TouchableOpacity onPress={() => loadblock()}>
                                                <a href="#"><i className="soap-icon-block" /></a>
                                            </TouchableOpacity>
                                        </li>

                                        <li className="swap-list active">
                                            <TouchableOpacity onPress={() => loadList()}>
                                                <a href="#"><i className="soap-icon-list" /></a>
                                            </TouchableOpacity>
                                        </li>
                                        <li className={gridClass}>
                                            <TouchableOpacity onPress={() => loadGrid()}>
                                                <a href="#"><i className="soap-icon-grid" /></a>
                                            </TouchableOpacity>
                                        </li>

                                    </ul>
                                </div>

                                {
                                    showList &&
                                    <div className="hotel-list listing-style3 hotel">


                                        {
                                            destinationList.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                        }
                                        {

                                            typeof (destinationList.Tours) !== 'undefined' && destinationList.Tours.length ? (
                                                destinationList.Tours.map((item, index) => {
                                                    // console.log(item.dest_cover_image);
                                                    return (

                                                        <DestinationList
                                                            picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.tour_cover}
                                                            destName={item.tour_location}
                                                            destRegion={item.dest_cat_name}
                                                            dest_desc={item.tour_description}
                                                            // hotel_average_price={item.hotel_average_price}
                                                            destLink={'/tours/main/' + item.tour_id}  //{'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                        />
                                                    )
                                                })
                                            ) : null
                                        }




                                    </div>
                                }



                                {
                                    showGrid &&
                                    <div className="hotel-list">
                                        <div className="row image-box hotel listing-style1">


                                            {
                                                destinationList.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                            }
                                            {

                                                typeof (destinationList.Tours) !== 'undefined' && destinationList.Tours.length ? (
                                                    destinationList.Tours.map((item, index) => {
                                                        // console.log(item.dest_cover_image);
                                                        return (
                                                            <DestinationGrid
                                                                picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.tour_cover}
                                                                destName={item.tour_location}
                                                                destRegion={item.dest_cat_name}
                                                                dest_desc={item.tour_description}
                                                                // hotel_average_price={item.hotel_average_price}
                                                                destLink={'/tours/main/' + item.tour_id}   //{'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                            />
                                                        )
                                                    })
                                                ) : null
                                            }
                                        </div>
                                    </div>

                                }

                                {
                                    showBlock &&
                                    <div className="hotel-list">
                                        <div className="row image-box hotel listing-style2">

                                            {
                                                destinationList.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                            }
                                            {

                                                typeof (destinationList.Tours) !== 'undefined' && destinationList.Tours.length ? (
                                                    destinationList.Tours.map((item, index) => {
                                                        // console.log(item.dest_cover_image);
                                                        return (
                                                            <DestinationBlock
                                                                picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.tour_cover}
                                                                destName={item.tour_location}
                                                                destRegion={item.dest_cat_name}
                                                                dest_desc={item.tour_description}
                                                                // hotel_average_price={item.hotel_average_price}
                                                                destLink={'/tours/main/' + item.tour_id}//{'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                            />
                                                            // <HotelGrid
                                                            //     picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.hotel_cover}
                                                            //     hotelName={item.hotel_name}
                                                            //     hotel_city={item.hotel_city}
                                                            //     hotel_desc={item.hotel_desc}
                                                            //     hotel_average_price={item.hotel_average_price}
                                                            //     hotelLink={'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                            // />
                                                        )
                                                    })
                                                ) : <p>No Records Found</p>
                                            }
                                        </div>
                                    </div>

                                }

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default TourHome;
