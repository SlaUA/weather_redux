import * as chartConstants from '../constants/Tabs';

export function changeActiveTab(tabToSet) {
	return {
		type: chartConstants.TAB_CHANGE,
		payload: tabToSet
	}
}