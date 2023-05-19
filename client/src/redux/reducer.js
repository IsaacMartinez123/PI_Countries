import { ADD_COUNTRY, FIND_COUNTRY, ORDER_COUNTRY, ORDER_POPULATION, FILTER_CONTINENT, ADD_ACTIVITY, RESET_DETAIL, GET_ACTIVITY, FILTER_ACTIVITY, GET_COUNTRY } from "./action-types";

const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: [],
    activities: []
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
                countries: payload,
            };

        case FIND_COUNTRY:
            return {
                ...state,
                countryDetail: payload
            };
            
        case RESET_DETAIL: 
            return{
                ...state,
                countryDetail: []
            }

        case ORDER_COUNTRY:
            const countriesCopy = [...state.countries]
            if (payload === 'A') {
                countriesCopy.sort((a, b) => a.name.localeCompare(b.name))
            }else if(payload === 'D'){
                countriesCopy.sort((a, b) => b.name.localeCompare(a.name))
            }
            return{
                ...state,
                countries: countriesCopy
            }
        
        case ORDER_POPULATION:
            const countriesCopyByPopulation = [...state.countries]
            return{
                ...state,
                countries: payload === 'MJ'
                ? countriesCopyByPopulation.sort((a, b) => a.population - b.population)
                : countriesCopyByPopulation.sort((a, b) => b.population - a.population)
            }

        case FILTER_CONTINENT:
            const filterContinent = state.allCountries.filter(country => country.continent === payload )
            return{
                ...state,
                countries: payload === 'AllCountries'
                ? [...state.allCountries]
                : filterContinent
            }

        case ADD_ACTIVITY:
            return{
                ...state,
            }

        case GET_ACTIVITY:
            return{
                ...state,
                activities: [...state.activities, payload]
            }

        case FILTER_ACTIVITY:
            console.log(state.countries[0].activities);
            const filterActivity = state.allCountries.filter((country) => {
                return country.activities.some((activity) => activity.name === payload);
            });

            return{
                ...state,
                countries: payload === 'AllActivities'
                ? [...state.allCountries]
                : filterActivity
            }

        default:
        return state;
    }
};


export default reducer;