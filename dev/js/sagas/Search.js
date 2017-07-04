import {call, put, takeLatest} from 'redux-saga/effects';
import * as searchAPI from '../api/Search';
import * as searchConstants from '../constants/Search';

function* searchWeather(action) {
	try {
		let weatherData = yield call(searchAPI.search, action.payload);
		yield put({
			type: searchConstants.SEARCH_DONE,
			payload: weatherData.data
		});
	} catch (e) {
		yield put({
			type: searchConstants.SEARCH_ERROR,
			payload: e.message
		});
	}
}

function* searchSaga() {
	yield takeLatest(searchConstants.SEARCH_START, searchWeather);
}

export default searchSaga;