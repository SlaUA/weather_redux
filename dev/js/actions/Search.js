import * as searchConstants from '../constants/Search';

export function search(searchParam) {
	return {
		type: searchConstants.SEARCH_START,
		payload: searchParam
	};
}

export function changeSearchInput(value) {
	return {
		type: searchConstants.SEARCH_INPUT_CHANGE,
		payload: value
	}
}