import axios from 'axios';
import * as searchConstants from '../constants/Search';

/**
 * Search weather data call from open weather map API
 * @param searchParam {Object | String} query param(s): object as a param must have lat and lon properties from current position
 * @param [daysCount] {Number} a count of days to load from API, 16 as a default
 * @return {Promise}
 */
export function search(searchParam, daysCount = 16) {
	
	let searchQuery;
	
	if (typeof searchParam === 'object') {
		searchQuery = `lat=${searchParam.lat}&lon=${searchParam.lon}`
	} else {
		searchQuery = `q=${searchParam}`
	}
	
	return axios.get(`${searchConstants.WEATHER_URI}&cnt=${daysCount}&${searchQuery}`);
}