import * as chartConstants from '../constants/Chart';

export function changeActiveTab(tabToSet) {
	return function (dispatch) {
		
		dispatch({
			type: chartConstants.TAB_CHANGE,
			payload: tabToSet
		})
	}
}