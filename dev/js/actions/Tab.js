import * as chartConstants from '../constants/Tabs';

export function changeActiveTab(tabToSet) {
	return function (dispatch) {
		
		dispatch({
			type: chartConstants.TAB_CHANGE,
			payload: tabToSet
		})
	}
}