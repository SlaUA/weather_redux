import axios from 'axios';
import * as searchConstants from '../constants/Search';

export function search(searchParam) {
	return function (dispatch) {
		
		let searchQuery;
		
		if (typeof searchParam === 'object') {
			searchQuery = `lat=${searchParam.lat}&lon=${searchParam.lon}`
		} else {
			searchQuery = `q=${searchParam}`
		}
		
		dispatch({
			type: searchConstants.SEARCH_START
		});
		
		axios
			.get(`${searchConstants.WEATHER_URI}&${searchQuery}`)
			.then((event) =>
				dispatch({
					type: searchConstants.SEARCH_DONE,
					payload: event.data
				})
			)
			.catch((err) =>
				dispatch({
					type: searchConstants.SEARCH_ERROR,
					payload: event.data
				})
			);
	}
}

export function changeSearchInput(value) {
	return function (dispatch) {
		
		dispatch({
			type: searchConstants.SEARCH_INPUT_CHANGE,
			payload: value
		})
	}
}