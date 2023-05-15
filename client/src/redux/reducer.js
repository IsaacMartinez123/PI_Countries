import { ADD_COUNTRY, FIND_COUNTRY, ORDER_COUNTRY, ORDER_POPULATION, FILTER_CONTINENT, ADD_ACTIVITY, RESET_DETAIL, GET_ACTIVITY, FILTER_ACTIVITY } from "./action-types";

const initialState = {
    countries: [],
    countryDetail: [],
    allCountries: [],
    activities: []
};



const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COUNTRY:
            
            return {
                ...state,
                countries: [...state.countries, ...payload],
                allCountries: [...state.allCountries, ...payload]
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
            return{
                ...state,
                countries: payload === 'A'
                ? countriesCopy.sort((a, b) => a.name.localeCompare(b.name))
                : countriesCopy.sort((a, b) => b.name.localeCompare(a.name))
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
                // activities: [...state.activities, payload]
            }

        case GET_ACTIVITY:
            return{
                ...state,
                activities: [...state.activities, payload]
            }

        case FILTER_ACTIVITY:
            const filterActivity = state.allCountries.filter(activity => activity.activities.id === payload )

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