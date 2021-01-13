import { connect, useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, TouchableOpacity, View } from "react-native-web";
import { useState, useEffect } from 'react';


import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubHeader from '../../components/SubHeader';
import HotelList from '../../components/HotelList';
import HotelGrid from "../../components/HotelGrid";
import $ from "jquery";
import { fetchHotelsFromApi, fetchFilterHotelsFromApi } from "../../../shared/actions/HotelActions";
import HotelBlock from "../../components/HotelDetails/HotelBlock";


const HotelHome = props => {

    // const { Hotels, isGetting } = props.Hotels

    const hotelInformation = useSelector(state => state.Hotels);    //getting user profile
    const dispatch = useDispatch();
    const [gridClass, setGridClass] = useState('swap-grid');

    const [showList, setList] = useState(false);
    const [showGrid, setGrid] = useState(false);
    const [showBlock, setBlock] = useState(true)


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

    useEffect(() => {
        dispatch(fetchHotelsFromApi())
    }, [])


    const testinfFUction = () => {
        dispatch(fetchHotelsFromApi())
    }



    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            ;
    }


    const [breakfastClass, setbreakfastClass] = useState('active')
    const [resrotClass, setresrotClass] = useState('active')
    const [regionsFilter, setRegionsFilter] = useState([]);


    const changeClass = (param_a) => {


        console.log("This is Top" + document.getElementById(param_a))
        let x = document.getElementById(param_a).hasAttribute("class");

        let p = document.getElementById(param_a).getAttribute("class");
        console.log("This is P " + p)
        // if (document.getElementById(param_a).hasAttribute("class")) {
        //     console.log("ok")
        // }
        // else {
        //     console.log("Not Ok")
        // }
        if (x) {
            console.log("There")
            document.getElementById(param_a).removeAttribute("class");
        } else {
            console.log(document.getElementById(param_a).value)
            document.getElementById(param_a).setAttribute("class", "active");
        }

    }


    const searchForLocation = (target) => {
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
            "checkmeals": null,
            "type": null,
            "checkamen": null,
            "hoteltype": null,
            "region": null,
            "min": null,
            "max": null,
            "stay": regions.join(',')
        }
        let data = JSON.stringify(myChecks);

        console.log(data)
        dispatch(fetchFilterHotelsFromApi(data))
        // alert('ok')
    }


    const listItems = [
        {
            "name": "\'Bahawalpur\'",
            "title": "Bahawalpur"
        },
        {
            "name": "\'Islamabad\'",
            "title": "Islamabad"
        },
        {
            "name": "\'Karachi\'",
            "title": "Karachi"
        },
        {
            "name": "\'Lahore\'",
            "title": "Lahore"
        },
        {
            "name": "\'Multan\'",
            "title": "Multan"
        },
        {
            "name": "\'Attabad\'",
            "title": "Attabad"
        },
        {
            "name": "\'Batakundi\'",
            "title": "Batakundi"
        },
        {
            "name": "\'Chitral\'",
            "title": "Chitral"
        },
        {
            "name": "\'Fairy Meadows\'",
            "title": "Fairy Meadows"
        },
        {
            "name": "\'Ghizer\'",
            "title": "Ghizer"
        },

        {
            "name": "\'Gulmit\'",
            "title": "Gulmit"
        },
        {
            "name": "\'Hunza\'",
            "title": "Hunza"
        },
        {
            "name": "\'Murree\'",
            "title": "Murree"
        },
        {
            "name": "\'Muzaffarabad\'",
            "title": "Muzaffarabad"
        },
        {
            "name": "\'Naran\'",
            "title": "Naran"
        },
        {
            "name": "\'Nathiagali\'",
            "title": "Nathiagali"
        },
        {
            "name": "\'Neelum Valley\'",
            "title": "Neelum Valley"
        },
        {
            "name": "\'Shigar\'",
            "title": "Shigar"
        },
        {
            "name": "\'Shogran\'",
            "title": "Shogran"
        },
        {
            "name": "\'Skardu\'",
            "title": "Skardu"
        }
    ]
    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Hotel Search Results</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Hotel Search Results</li>
                    </ul>
                </div>
            </div>

            <section id="content">
                <div className="container">
                    <div id="main">
                        <div className="row">
                            {/*  Search Filters */}
                            <div className="col-sm-4 col-md-3">
                                {/* <h4 className="search-results-title"><i className="soap-icon-search" /><b></b></h4> */}
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

                                                <ul className="check-square filters-option">
                                                    {
                                                        listItems.map((item, index) => {
                                                            console.log(JSON.stringify(item));
                                                            return (

                                                                <li>
                                                                    <a title={item.name} onClick={(e) => searchForLocation(e.target)}>
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
                                    <h4 className="sort-by-title block-sm">Book your Hotel</h4>
                                    {/* <ul className="sort-bar clearfix block-sm">
                                        <li className="sort-by-name"><a className="sort-by-container" href="#"><span>name</span></a></li>
                                        <li className="sort-by-price"><a className="sort-by-container" href="#"><span>price</span></a></li>
                                        <li className="clearer visible-sms" />
                                        <li className="sort-by-rating active"><a className="sort-by-container" href="#"><span>rating</span></a></li>
                                        <li className="sort-by-popularity"><a className="sort-by-container" href="#"><span>popularity</span></a></li>
                                    </ul> */}
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

                                {/* <TouchableOpacity onPress={() => testinfFUction()}>
                                    <p>Test Button</p>
                                </TouchableOpacity> */}
                                {

                                    console.log("Status:====>>>>" + hotelInformation.isGetting)
                                }
                                {
                                    showList &&
                                    <div className="hotel-list listing-style3 hotel">
                                        {
                                            hotelInformation.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                        }
                                        {

                                            typeof (hotelInformation.Hotels) !== 'undefined' && hotelInformation.Hotels.length ? (
                                                hotelInformation.Hotels.map((item, index) => {
                                                    // console.log(item.dest_cover_image);
                                                    return (
                                                        <HotelList
                                                            picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.hotel_cover}
                                                            hotelName={item.hotel_name}
                                                            hotel_city={item.hotel_city}
                                                            hotel_desc={item.hotel_desc}
                                                            hotel_average_price={item.hotel_average_price}
                                                            hotelLink={'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                        />
                                                    )
                                                })
                                            ) : <p>No Records Found</p>
                                        }




                                    </div>
                                }



                                {
                                    showGrid &&
                                    <div className="hotel-list">
                                        <div className="row image-box hotel listing-style1">

                                            {
                                                hotelInformation.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                            }
                                            {

                                                typeof (hotelInformation.Hotels) !== 'undefined' && hotelInformation.Hotels.length ? (
                                                    hotelInformation.Hotels.map((item, index) => {
                                                        // console.log(item.dest_cover_image);
                                                        return (
                                                            <HotelGrid
                                                                picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.hotel_cover}
                                                                hotelName={item.hotel_name}
                                                                hotel_city={item.hotel_city}
                                                                hotel_desc={item.hotel_desc}
                                                                hotel_average_price={item.hotel_average_price}
                                                                hotelLink={'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
                                                            />
                                                        )
                                                    })
                                                ) : <p>No Records Found</p>
                                            }
                                        </div>
                                    </div>

                                }


                                {
                                    showBlock &&
                                    <div className="hotel-list">
                                        <div className="row image-box hotel listing-style2">

                                            {
                                                hotelInformation.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                            }
                                            {

                                                typeof (hotelInformation.Hotels) !== 'undefined' && hotelInformation.Hotels.length ? (
                                                    hotelInformation.Hotels.map((item, index) => {
                                                        // console.log(item.dest_cover_image);
                                                        return (
                                                            <HotelBlock
                                                                picture={'https://www.mytrip.pk/api/app/Controllers/uploads/' + item.hotel_cover}
                                                                hotelName={item.hotel_name}
                                                                hotel_city={item.hotel_city}
                                                                hotel_desc={item.hotel_desc}
                                                                hotel_average_price={item.hotel_average_price}
                                                                hotelLink={'/hotels/' + convertToSlug(item.hotel_name) + '/' + item.hotel_id}
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


// function mapStateToProps(state) {
//     return {
//         Hotels: state.Hotels
//     }
// }

// function mapDispatchToProps(disptach) {
//     return {
//         getHotels: () => disptach(fetchHotelsFromApi()),

//     }
// }


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HotelHome)
export default HotelHome;
