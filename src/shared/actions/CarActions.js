import { LOAD_CARS, LOAD_CARS_SUCCESS, LOAD_CARS_FAIL } from "../constant/Constant";

const fetchCarsFromApi = () => {
    return (disptach) => {
        disptach(getCars())
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://mytrip.pk/api/public/car/get", requestOptions)
            .then(data => data.json())
            .then(json => {
                disptach(getCarsSuccess(json.result))
                disptach(getNonFilteredCars(json.result))
                window.initPriceRange(Math.min(...json.result.map(x => x.car_price)), Math.max(...json.result.map(x => x.car_price)));
            })
            .catch((err) => {
                console.log(err)
                disptach(getCarsFailed(err))
            })
    }
}

const confirmCarHire = (carHireData) => {
    return new Promise (function (resolve, reject) {
        debugger;
        var myHeaders = new Headers();
        myHeaders.append("token", "J@NcRfUjXn2r5u8x/A?D(G+KaPdSgVkY");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(carHireData);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://mytrip.pk/api/public/booking/car", requestOptions)
            .then(data => data.json())
            .then(json => {
                debugger;
                resolve(json)
            })
            .catch((err) => {
                reject(err)
            })
    });
}

const getCars = () => {
    return {
        type: LOAD_CARS
    }
}

const getFilteredCars = (filteredCars, allCars, filters) => {
    return {
        type: 'LOAD_FILTERED_CARS',
        payload: {
            Cars: filteredCars,
            UnFilteredCars: allCars,
            filters: filters
        }
    }
}

const getNonFilteredCars = (cars) => {
    return {
        type: 'LOAD_UNFILTERED_CARS',
        payload: {
            Cars: cars
        }
    }
}

const getCarsSuccess = (data) => {
    return {
        type: LOAD_CARS_SUCCESS,
        data
    }
}

const getCarsFailed = () => {
    return {
        type: LOAD_CARS_FAIL
    }
}

export default {
    fetchCarsFromApi,
    confirmCarHire,
    getCars,
    getFilteredCars,
    getCarsSuccess,
    getCarsFailed
}