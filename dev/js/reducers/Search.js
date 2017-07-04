import * as searchConstants from '../constants/Search';

let initialState = {
	searchText: ''
};

export default function (state = initialState, action) {
	
	switch (action.type) {
		// change search input text
		case searchConstants.SEARCH_INPUT_CHANGE:
			
			return {
				...state,
				searchText: action.payload
			};
			break;
	}
	return state;
}