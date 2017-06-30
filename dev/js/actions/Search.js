import axios from 'axios';
import * as constants from '../constants/Search';

export function search(searchParam) {
    return function (dispatch) {

        let searchQuery;

        if (typeof searchParam === 'object') {
            searchQuery = `lat=${searchParam.lat}&lon=${searchParam.lon}`
        } else {
            searchQuery = `q=${searchParam}`
        }

        dispatch({
            type: 'searchStart'
        });

        axios
            .get(`${constants.WEATHER_URI}&${searchQuery}`)
            .catch((err)=>console.log(err))
            .then((event)=>
                dispatch({
                    type: 'searchDone',
                    payload: event.data
                })
            );
    }
}