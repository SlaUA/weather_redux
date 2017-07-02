import * as searchConstants from '../constants/Search';

let initialState = {
	searchResult: {}
};

export default function (state = initialState, action) {
	
	switch (action.type) {
		case searchConstants.SEARCH_DONE:
			return Object.assign({}, state, {
				searchResult: action.payload
			});
			break;
	}
	return state;
}