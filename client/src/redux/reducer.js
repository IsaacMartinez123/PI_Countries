import { ADD_COUNTRY, FIND_COUNTRY, ORDER_COUNTRY, ORDER_POPULATION, FILTER_CONTINENT, ADD_ACTIVITY, RESET_DETAIL, GET_ACTIVITY, FILTER_ACTIVITY, GET_COUNTRY } from "./action-types";

const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: [],
    activities: [],
    order: null,
    continentFilter: null,
    activityFilter: null,
};

const applyFiltersAndOrder = (countries, order, continentFilter, activityFilter) => {
    let filteredCountries = [...countries];

    if (continentFilter && continentFilter !== 'AllCountries') {
        filteredCountries = filteredCountries.filter(country => country.continent === continentFilter);
    }

    if (activityFilter && activityFilter !== 'AllActivities') {
        filteredCountries = filteredCountries.filter(country => country.activities.some(activity => activity.name === activityFilter));
    }

    if (order === 'A') {
        filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'D') {
        filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
    } else if (order === 'MJ') {
        filteredCountries.sort((a, b) => a.population - b.population);
    } else if (order === 'MR') {
        filteredCountries.sort((a, b) => b.population - a.population);
    }

    return filteredCountries;
};

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_COUNTRY:
            return {
                ...state,
                countries: payload,
                allCountries: payload
            };

        case ADD_COUNTRY:
            return {
                ...state,
                countries: payload === '' ? [...state.allCountries] : payload
            };

        case FIND_COUNTRY:
            return {
                ...state,
                countryDetail: payload
            };

        case RESET_DETAIL:
            return {
                ...state,
                countryDetail: []
            };

        case ORDER_COUNTRY:
            return {
                ...state,
                order: payload,
                countries: applyFiltersAndOrder(state.allCountries, payload, state.continentFilter, state.activityFilter),
            };

        case ORDER_POPULATION:
            return {
                ...state,
                order: payload,
                countries: applyFiltersAndOrder(state.allCountries, payload, state.continentFilter, state.activityFilter),
            };

        case FILTER_CONTINENT:
            return {
                ...state,
                continentFilter: payload,
                countries: applyFiltersAndOrder(state.allCountries, state.order, payload, state.activityFilter),
            };

        case ADD_ACTIVITY:
            return {
                ...state
            };

        case GET_ACTIVITY:
            return {
                ...state,
                activities: payload
            };

        case FILTER_ACTIVITY:
            return {
                ...state,
                activityFilter: payload,
                countries: applyFiltersAndOrder(state.allCountries, state.order, state.continentFilter, payload),
            };

        default:
            return state;
    }
};

export default reducer;

