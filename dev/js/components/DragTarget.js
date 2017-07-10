import React from 'react';
require('../../styles/DragTarget.styl');

export default class DragTarget extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div className="dragTarget">
            {this.props.children}
        </div>
    }
}