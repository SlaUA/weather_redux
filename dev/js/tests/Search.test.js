import * as actions from '../actions/Search';
import * as constants from '../constants/Search';

describe('search actions', () => {
	
	test('should create an action when search input is changed', () => {
		
		const text = 'London';
		const expectedAction = {
			type: constants.SEARCH_INPUT_CHANGE,
			payload: text
		};
		expect(actions.changeSearchInput(text)).toEqual(expectedAction)
	});
});