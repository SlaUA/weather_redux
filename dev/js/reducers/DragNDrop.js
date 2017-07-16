import * as dndConstants from '../constants/DragNDrop';

let initialState = {
	targetSources: [
		{
			id: 1499977381889,
			draggable: null
		},
		{
			id: 1499977381988,
			draggable: null
		},
		{
			id: 1499977382088,
			draggable: {
				id: 1499977382196,
				text: 'Drag me'
			}
		},
		{
			id: 1499977382285,
			draggable: null
		},
		{
			id: 1499977382393,
			draggable: {
				id: 1499977382195,
				text: 'Drag me'
			}
		},
		{
			id: 1499977382488,
			draggable: null
		},
		{
			id: 1499977382588,
			draggable: null
		},
		{
			id: 1499977382694,
			draggable: null
		},
		{
			id: 1499977382794,
			draggable: null
		}
	]
};

export default function (state = initialState, action) {
	
	switch (action.type) {
		case dndConstants.DROP_SUCCESS:
			
			let currentDraggableIndex,
				currentDraggable = state.targetSources.find((targetSource, index) => {
					
					if (targetSource.draggable && targetSource.draggable.id === action.payload.draggableId) {
						currentDraggableIndex = index;
						return targetSource.draggable;
					}
				}).draggable;
			
			return {
				...state,
				targetSources: state.targetSources.map((targetSource) => {
					
					if (action.payload.targetSourceId === targetSource.id) {
						targetSource.draggable = currentDraggable;
					}
					
					if (action.payload.targetSourceId !== targetSource.id &&
						targetSource.draggable &&
						targetSource.draggable.id === action.payload.draggableId) {
						targetSource.draggable = null;
					}
					return targetSource;
				})
			}
	}
	return state;
}