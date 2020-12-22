import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, TouchableOpacity, View } from "react-native-web";
import { useState, useEffect } from 'react';

import SubHeader from "../../components/SubHeader";
import Footer from '../../components/Footer';
import DestinationList from "../../components/DestinationDetails/DestintionList";
import DestinationGrid from "../../components/DestinationDetails/DestinationGrid";

import { fetchDestFromApi } from "../../../shared/actions/TourActions";

const TourHome = props => {

    const [gridClass, setGridClass] = useState('swap-grid');
    const [showList, setList] = useState(true);
    const [showGrid, setGrid] = useState(false)


    //redux
    const destinationList = useSelector(state => state.Tours);    //getting user profile
    const dispatch = useDispatch();


    const loadGrid = () => {
        setList(false)
        setGrid(true)
    }

    const loadList = () => {
        setList(true)
        setGrid(false)
    }

    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            ;
    }


    useEffect(() => {
        dispatch(fetchDestFromApi())
    }, [])



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
                                <h4 className="search-results-title"><i className="soap-icon-search" /><b>1,984</b> results found.</h4>
                                <div className="toggle-container filters-container">
                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#price-filter" className="collapsed">Price</a>
                                        </h4>
                                        <div id="price-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <div id="price-range" />
                                                <br />
                                                <div className="clearer" />
                                            </div>{/* end content */}
                                        </div>
                                    </div>

                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#accomodation-type-filter" className="collapsed">Region/Cites</a>
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

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="col-sm-8 col-md-9">
                                <div className="sort-by-section clearfix">
                                    <h4 className="sort-by-title block-sm">Select your Destination</h4>

                                    <ul className="swap-tiles clearfix block-sm">
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
