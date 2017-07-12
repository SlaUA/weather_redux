import React from 'react';
import PropTypes from 'prop-types';
require('../../styles/DragTarget.styl');

export default class DragTarget extends React.Component {

    constructor(props) {
        super(props);
    }

    // allow drop or not
    onDragOver(e) {
        e.preventDefault();
    }

    onDrop(e) {
        console.info(`drop on index: ${this.props.currentIndex}`);
    }

    render() {

        return <div onDrop={this.onDrop.bind(this)}
                    onDragOver={this.onDragOver.bind(this)}
                    className="dragTarget">
            {this.props.children}
        </div>
    }
}


DragTarget.propTypes = {
    currentIndex: PropTypes.number.isRequired
};