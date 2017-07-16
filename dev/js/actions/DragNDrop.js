import * as dndConstants from '../constants/DragNDrop';

export function drop(params) {
	return {
		type: dndConstants.DROP_SUCCESS,
		payload: params
	};
}