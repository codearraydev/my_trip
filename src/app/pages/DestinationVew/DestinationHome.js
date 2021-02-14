import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, TouchableOpacity, View } from "react-native-web";
import { useState, useEffect } from 'react';

import SubHeader from "../../components/SubHeader";
import Footer from '../../components/Footer';
import DestinationList from "../../components/DestinationDetails/DestintionList";
import DestinationGrid from "../../components/DestinationDetails/DestinationGrid";
import renderHTML from "react-render-html";
import { fetchDestFromApi } from "../../../shared/actions/DestinationAction";
import DestinationBlock from "../../components/DestinationDetails/DestinationBlock";

const Home = props => {


    const initialData = JSON.stringify({ "region": null });
    const [gridClass, setGridClass] = useState('swap-grid');

    const [showList, setList] = useState(false);
    const [showGrid, setGrid] = useState(false);
    const [showBlock, setBlock] = useState(true);


    //redux
    const destinationList = useSelector(state => state.Destinations);    //getting user profile
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

    useEffect(() => {
        dispatch(fetchDestFromApi(initialData))
    }, [])




    const listItems = [
        {
            "name": "1",
            "title": "Khyber Pakhtunkhwa"
        },
        {
            "name": "6",
            "title": "Gilgit Baltistan"
        },
        {
            "name": "7",
            "title": "Azad Kashmir"
        },
        {
            "name": "3",
            "title": "Punjab"
        },
        {
            "name": "4",
            "title": "Sindh"
        },
        {
            "name": "5",
            "title": "Balochistan"
        }
    ];

    const [regionsFilter, setRegionsFilter] = useState([]);
    const searchForDestinatons = (target) => {


        let regions = regionsFilter;
        if (regions.includes(target.getAttribute('title')))
            regions = regions.filter(x => x != target.getAttribute('title'))
        else
            regions.push(target.getAttribute('title'))
        setRegionsFilter(regions)

        if (target.parentElement.classList.contains('active'))
            target.parentElement.classList.remove('active')
        else
            target.parentElement.classList.add('active')


        let myChecks = {
            "region": (regions.length > 0) ? regions.join(" , ") : null
        }

        let data = JSON.stringify(myChecks);

        //console.log(data)
        dispatch(fetchDestFromApi(data))
        //let vregion = regions = (regions.length > 0) ? regions.join(" , ") : null;
        //let raw = JSON.stringify({ "region": regions.join(" , ") });

        // console.log(raw)
    }

    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Destinations</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Destinations</li>
                    </ul>
                </div>
            </div>
            <section id="content">
                <div className="container">
                    <div id="main">
                        <div className="row">
                            {/*  Search Filters */}
                            <div className="col-sm-4 col-md-3">
                                <h4 className="search-results-title"><i className="soap-icon-search" /><b>Filters</b> </h4>
                                <div className="toggle-container filters-container">


                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#accomodation-type-filter" className="collapsed">Region</a>
                                        </h4>
                                        <div id="accomodation-type-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                {/* <ul className="check-square filters-option">
                                                    {
                                                        //listItems

                                                        listItems.map((item, index) => {
                                                            console.log(JSON.stringify(item));
                                                            return (
                                                                <TouchableOpacity onPress={() => changeClass(item.name)}>
                                                                    <li id={item.name}><a href="#">{item.title}<small>(127)</small></a></li>
                                                                </TouchableOpacity>
                                                            )
                                                        })
                                                    }


                                                </ul> */}

                                                <ul className="check-square filters-option">
                                                    {
                                                        listItems.map((item, index) => {
                                                            // console.log(JSON.stringify(item));
                                                            return (

                                                                <li>
                                                                    <a title={item.name} onClick={(e) => { searchForDestinatons(e.target) }}>
                                                                        {item.title}</a>
                                                                </li>

                                                                // <li>
                                                                //     <label htmlFor="vehicle1">
                                                                //         <input onChange={() => searchForLocation()} type="checkbox" name="city" value={item.name} />
                                                                //         {item.title}
                                                                //     </label>
                                                                // </li>
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
                                    <h4 className="sort-by-title block-sm">Select your Destination</h4>

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

                                        {/* <li className="swap-block">
                                            <TouchableOpacity onPress={() => { }}>
                                                <a href="#"><i className="soap-icon-block" /></a>
                                            </TouchableOpacity>
                                        </li> */}
                                    </ul>
                                </div>

                                {
                                    showList &&
                                    <div className="hotel-list listing-style3 hotel">


                                        {
                                            destinationList.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                        }
                                        {

                                            typeof (destinationList.Destinations) !== 'undefined' && destinationList.Destinations.length ? (
                                                destinationList.Destinations.map((item, index) => {
                                                    // console.log(item.dest_cover_image);
                                                    return (

                                                        <DestinationList
                                                            picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.dest_cover_image}
                                                            destName={item.dest_name}
                                                            destRegion={item.dest_cat_name}
                                                            dest_desc={item.dest_description}
                                                            // hotel_average_price={item.hotel_average_price}
                                                            destLink={'/destinations/' + convertToSlug(item.dest_name) + '/' + item.dest_id}  //{'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
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

                                                typeof (destinationList.Destinations) !== 'undefined' && destinationList.Destinations.length ? (
                                                    destinationList.Destinations.map((item, index) => {
                                                        // console.log(item.dest_cover_image);
                                                        return (
                                                            <DestinationGrid
                                                                picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.dest_cover_image}
                                                                destName={item.dest_name}
                                                                destRegion={item.dest_cat_name}
                                                                dest_desc={item.dest_description}
                                                                // hotel_average_price={item.hotel_average_price}
                                                                destLink={'/destinations/' + convertToSlug(item.dest_name) + '/' + item.dest_id}  //{'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
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

                                                typeof (destinationList.Destinations) !== 'undefined' && destinationList.Destinations.length ? (
                                                    destinationList.Destinations.map((item, index) => {
                                                        // console.log(item.dest_cover_image);
                                                        return (
                                                            <DestinationBlock
                                                                picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.dest_cover_image}
                                                                destName={item.dest_name}
                                                                destRegion={item.dest_cat_name}
                                                                dest_desc={item.dest_description}
                                                                // hotel_average_price={item.hotel_average_price}
                                                                destLink={'/destinations/' + convertToSlug(item.dest_name) + '/' + item.dest_id}  //{'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
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

export default Home;
