import { ADD_COUNTRY, FIND_COUNTRY, ORDER_COUNTRY, ORDER_POPULATION, FILTER_CONTINENT, ADD_ACTIVITY, RESET_DETAIL, GET_ACTIVITY, FILTER_ACTIVITY, GET_COUNTRY } from "./action-types";
import axios from 'axios';

export const addCountry = (name) => {
    const endpoint = 'http://localhost:3001/countries';
    
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}?name=${name}`);
            if (!data.length) {
                throw new Error(`No countries found with this name: ${name}`);
            }

            return dispatch({
                type: ADD_COUNTRY,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};

export const getCountry = () => {
    const endpoint = 'http://localhost:3001/countries';

    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}`);

            if (!data.length) {
                throw new Error(`No countries found`);
            }

            return dispatch({
                type: GET_COUNTRY,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};

export const findCountryById = (id) => {
    const endpoint = 'http://localhost:3001/countries';
    
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/${id}`);
            
            if (!data.length) {
                throw new Error(`No countries were found with this id: ${id}`);
            }

            return dispatch({
                type: FIND_COUNTRY,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};

export const orderCountry = (order) => {
    try {
        return{
            type: ORDER_COUNTRY,
            payload: order,
        }
    } catch (error) {
        alert(error.message);
    }
}

export const filterContinent = (continent) => {
    try {
        return{
            type: FILTER_CONTINENT,
            payload: continent,
        }
    } catch (error) {
        alert(error.message);
    }
}
export const filterActivity = (activity) => {
    try {
        return{
            type: FILTER_ACTIVITY,
            payload: activity,
        }
    } catch (error) {
        alert(error.message);
    }
}

export const postActivity = (activity) => {

    const endpoint = 'http://localhost:3001/activities';

    return async (dispatch) => {
        try {
            await axios.post(endpoint, activity)

            return dispatch({
                type: ADD_ACTIVITY
            });
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getActivities = () => {

    const endpoint = 'http://localhost:3001/activities';

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)

            return dispatch({
                type: GET_ACTIVITY,
                payload: data
            });
        } catch (error) {
            alert(error.message)
        }
    }
}


export const resetDetail = () => {
    try {
        return{
            type: RESET_DETAIL
        }
    } catch (error) {
        alert(error.message);
    }
}


