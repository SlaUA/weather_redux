let initialState = {
    targetSources: 16,
    draggables: [{
        key: Date.now(),
        text: 'first draggable'
    }],
    currentDragItem: null
};

export default function (state = initialState, action) {

    switch (action.type) {

    }
    return state;
}