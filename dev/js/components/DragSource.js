import React from 'react';
require('../../styles/DragSource.styl');

export default class DragSource extends React.Component {

    render() {

        return (
            <div draggable="true" className="dragSource"></div>
        );
    }
}