import * as tabsConstants from '../constants/Tabs';

let initialState = {
	activeTab: 0
};

export default function (state = initialState, action) {
	
	switch (action.type) {
		case tabsConstants.TAB_CHANGE:
			
			return ({
				...state,
				activeTab: action.payload
			});
	}
	return state;
}