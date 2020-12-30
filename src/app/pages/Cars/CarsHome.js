import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, TouchableOpacity, View } from "react-native-web";
import { useState, useEffect } from 'react';

import SubHeader from "../../components/SubHeader";
import Footer from '../../components/Footer';
import CarsList from "../../components/Cars/CarsList";
import CarsGrid from "../../components/Cars/CarsGrid";

import CarActions from "../../../shared/actions/CarActions";

const CarsHome = props => {

    const [gridClass, setGridClass] = useState('swap-grid');
    const [showList, setList] = useState(true);
    const [showGrid, setGrid] = useState(false)
    const [carsLoaded, setCarsLoaded] = useState(false)

    //redux
    const carsList = useSelector(state => state.Cars);
    const allCars = useSelector(state => state.Cars);

    const dispatch = useDispatch();

    let filtersApplied = {
        car_type: [],
        car_make: [],
        car_class: [],
        features: [],
        price: {
            low: 0,
            hight: 0
        }
    };

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
        dispatch(CarActions.fetchCarsFromApi())
    }, [])

    const hireCarNow = (car) => {
        return props.history.push({
            pathname: '/car-hire-confirmation',
            state: car
        })
    }

    let minPrice = null;
    let maxPrice = null;

    const handlePriceRangeChange = () => {
        minPrice = parseFloat(document.getElementById("carHireMinPrice").getAttribute('range'))
        maxPrice = parseFloat(document.getElementById("carHireMaxPrice").getAttribute('range'))

        setTimeout(() => {
            applyFilter(null, 'price', null);
        }, 500);
    }

    function applyFilter(target, mod, modVal){
        // Mod is the property of car, i.e. Car make, Car Type, Car Model & it must match with key of car i.e. car_make, car_model, car_type
        if(target){
            if (target.parentElement.classList.contains('active'))
                target.parentElement.classList.remove('active')
            else
                target.parentElement.classList.add('active')
        }

        filtersApplied = allCars.filters;
        let carsToRender = [];
        /**************************************** CAR TYPE FILTER START ******************************************/
        if(mod == 'car_type'){
            if(filtersApplied.car_type.includes(modVal))
                filtersApplied.car_type = filtersApplied.car_type.filter(x => x != modVal)
            else
                filtersApplied.car_type.push(modVal)
        }
        /**************************************** CAR TYPE FILTER END ******************************************/
        /**************************************** CAR MAKE FILTER START ******************************************/
        if(mod == 'car_make'){
            if(filtersApplied.car_make.includes(modVal))
                filtersApplied.car_make = filtersApplied.car_make.filter(x => x != modVal)
            else
                filtersApplied.car_make.push(modVal)
        }
        /**************************************** CAR MAKE FILTER START ******************************************/
        /**************************************** CAR CLASS FILTER START ******************************************/
        if(mod == 'car_class'){
            if(filtersApplied.car_class.includes(modVal))
                filtersApplied.car_class = filtersApplied.car_class.filter(x => x != modVal)
            else
                filtersApplied.car_class.push(modVal)
        }
        /**************************************** CAR CLASS FILTER START ******************************************/
        /**************************************** CAR FEATURES FILTER START ******************************************/
        if(mod == 'features'){
            if(filtersApplied.features.includes(modVal))
                filtersApplied.features = filtersApplied.features.filter(x => x != modVal)
            else
                filtersApplied.features.push(modVal)
        }
        /**************************************** CAR FEATURES FILTER START ******************************************/
        let carTypeFilter = [];
        let carMakeFilter = [];
        let carClassFilter = [];
        if(!filtersApplied.car_type.length)
            carTypeFilter = [...new Set(carsList.UnFilteredCars.map(x => x.car_type))]
        else
            carTypeFilter.push(...filtersApplied.car_type)
        if(!filtersApplied.car_make.length)
            carMakeFilter = [...new Set(carsList.UnFilteredCars.map(x => x.car_make))]
        else
            carMakeFilter.push(...filtersApplied.car_make)
        if(!filtersApplied.car_class.length)
            carClassFilter = [...new Set(carsList.UnFilteredCars.map(x => x.car_class))]
        else
            carClassFilter.push(...filtersApplied.car_class)

        carsToRender = carsList.UnFilteredCars.filter(x => 
            carTypeFilter.includes(x.car_type) &&
            carMakeFilter.includes(x.car_make) &&
            carClassFilter.includes(x.car_class)
        )

        if(filtersApplied.features.length){
            if(
                filtersApplied.features.includes("car_ac") &&
                !filtersApplied.features.includes("car_gearbox_1") &&
                !filtersApplied.features.includes("car_gearbox_2")
            )
                carsToRender = carsToRender.filter(x => x.car_ac == 1)
            else if(
                !filtersApplied.features.includes("car_ac") &&
                filtersApplied.features.includes("car_gearbox_1") &&
                !filtersApplied.features.includes("car_gearbox_2")
            )
                carsToRender = carsToRender.filter(x => x.car_gearbox == 1)
            else if(
                !filtersApplied.features.includes("car_ac") &&
                !filtersApplied.features.includes("car_gearbox_1") &&
                filtersApplied.features.includes("car_gearbox_2")
            )
                carsToRender = carsToRender.filter(x => x.car_gearbox == 2)
            else if(
                filtersApplied.features.includes("car_ac") &&
                filtersApplied.features.includes("car_gearbox_1") &&
                !filtersApplied.features.includes("car_gearbox_2")
            )
                carsToRender = carsToRender.filter(x => x.car_ac || x.car_gearbox == 1)
            else if(
                filtersApplied.features.includes("car_ac") &&
                !filtersApplied.features.includes("car_gearbox_1") &&
                filtersApplied.features.includes("car_gearbox_2")
            )
                carsToRender = carsToRender.filter(x => x.car_ac == 1 || x.car_gearbox == 2)
            else if(
                !filtersApplied.features.includes("car_ac") &&
                filtersApplied.features.includes("car_gearbox_1") &&
                filtersApplied.features.includes("car_gearbox_2")
            )
                carsToRender = carsToRender.filter(x => x.car_gearbox == 1 || x.car_gearbox == 2)
            else if(
                filtersApplied.features.includes("car_ac") &&
                filtersApplied.features.includes("car_gearbox_1") &&
                filtersApplied.features.includes("car_gearbox_2")
            )
            carsToRender = carsToRender.filter(x => x.car_ac == 1 || x.car_gearbox == 1 || x.car_gearbox == 2)
        }

        if(mod == 'price' || (filtersApplied.price.low && filtersApplied.price.low > 0)){
            filtersApplied.price = {
                low: minPrice ? minPrice : filtersApplied.price.low,
                high: maxPrice ? maxPrice : filtersApplied.price.high
            }
            carsToRender = carsToRender.filter(x => x.car_price >= (minPrice ? minPrice : filtersApplied.price.low) && x.car_price <= (maxPrice ? maxPrice : filtersApplied.price.high))
        }

        dispatch(CarActions.getFilteredCars(carsToRender, carsList.UnFilteredCars, filtersApplied))
    }

    return (
        <div id="page-wrapper">
            <SubHeader />
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Available Cars</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="#">HOME</a></li>
                        <li className="active">Available Cars</li>
                    </ul>
                </div>
            </div>

            {/* DUMMY BUTTON TO TRIGGER PRICE RANGE CHANGE FROM INDEX.HTML  */}
            <button id="carHirePriceRangeChange" onClick={handlePriceRangeChange} hidden></button>

            <section id="content">
                <div className="container">
                    <div id="main">
                        <div className="row">
                            {/*  Search Filters */}
                            <div className="col-sm-4 col-md-3">
                                <h4 className="search-results-title"><i className="soap-icon-search" /><b>{ allCars.Cars && allCars.Cars.length }</b> results found.</h4>
                                <div className="toggle-container filters-container">
                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#price-filter" className="collapsed">Price</a>
                                        </h4>
                                        <div id="price-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <div id="price-range" />
                                                <br />
                                                <span className="min-price-label pull-left"></span>
                                                <span className="max-price-label pull-right"></span>
                                                <div className="clearer" />
                                            </div>{/* end content */}
                                        </div>
                                    </div>
                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#car-type-filter" className="collapsed">Car Types</a>
                                        </h4>
                                        <div id="car-type-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <ul className="check-square filters-option">
                                                    { typeof (carsList) !== 'undefined' && carsList.UnFilteredCars && carsList.UnFilteredCars.length ? [...new Set(carsList.UnFilteredCars.map(x => x.car_type))].map(x => {
                                                        return <li>
                                                            <a onClick={(e) => applyFilter(e.target, 'car_type', x)}>
                                                                {x}
                                                            </a>
                                                        </li>
                                                    } ) : null }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#car-model-filter" className="collapsed">Car Make</a>
                                        </h4>
                                        <div id="car-model-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <ul className="check-square filters-option">
                                                    { typeof (carsList) !== 'undefined' && carsList.UnFilteredCars && carsList.UnFilteredCars.length ? [...new Set(carsList.UnFilteredCars.map(x => x.car_make))].map(x => {
                                                        return <li>
                                                            <a onClick={(e) => applyFilter(e.target, 'car_make', x)}>
                                                                {x}
                                                            </a>
                                                        </li>
                                                    } ) : null }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#car-class-filter" className="collapsed">Car Class</a>
                                        </h4>
                                        <div id="car-class-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <ul className="check-square filters-option">
                                                    { typeof (carsList) !== 'undefined' && carsList.UnFilteredCars && carsList.UnFilteredCars.length ? [...new Set(carsList.UnFilteredCars.map(x => x.car_class))].map(x => {
                                                        return <li>
                                                            <a onClick={(e) => applyFilter(e.target, 'car_class', x)}>
                                                                {x}
                                                            </a>
                                                        </li>
                                                    } ) : null }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel style1 arrow-right">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#car-features-filter" className="collapsed">Car Features</a>
                                        </h4>
                                        <div id="car-features-filter" className="panel-collapse collapse">
                                            <div className="panel-content">
                                                <ul className="check-square filters-option">
                                                    <li>
                                                        <a onClick={(e) => applyFilter(e.target, 'features', 'car_ac')}>
                                                            Air Conditioning
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a onClick={(e) => applyFilter(e.target, 'features', 'car_gearbox_2')}>
                                                            Automatic Transmission
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a onClick={(e) => applyFilter(e.target, 'features', 'car_gearbox_1')}>
                                                            Manual Transmission
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-8 col-md-9">
                                <div className="sort-by-section clearfix">
                                    <h4 className="sort-by-title block-sm">Select your Car</h4>
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
                                    <div class="car-list listing-style3 car">
                                        {
                                            allCars.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                        }
                                        {
                                            typeof (allCars.Cars) !== 'undefined' && allCars.Cars.length ? (
                                                allCars.Cars.map(item => <CarsList hireCarNow={hireCarNow} car={item} />)
                                            ) : null
                                        }
                                    </div>
                                }
                                {
                                    showGrid &&
                                    <div className="hotel-list">
                                        <div className="row image-box car listing-style1">
                                            {
                                                allCars.isGetting && <View style={{ textAlign: 'center', marginBottom: 5 }}><ActivityIndicator size="small" color="#00A1DE" /></View>
                                            }
                                            {
                                                typeof (allCars.Cars) !== 'undefined' && allCars.Cars.length ? (
                                                    allCars.Cars.map(item => <CarsGrid hireCarNow={hireCarNow} car={item} /> )
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

export default CarsHome;