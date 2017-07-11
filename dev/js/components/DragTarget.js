import React from 'react';
import PropTypes from 'prop-types';
require('../../styles/DragTarget.styl');

export default class DragTarget extends React.Component {

    constructor(props) {
        super(props);
    }

    onDragEnter(e) {
        console.info(`dragEnter on index: ${this.props.currentIndex}`);
    }

    onDragEnd(e) {
        console.info(`dragEnd on index: ${this.props.currentIndex}`);
    }

    onDrop(e) {
        console.info(`drop on index: ${this.props.currentIndex}`);
    }

    onDragStart(e) {
        console.info(`drag start on index: ${this.props.currentIndex}`);
    }

    render() {

        return <div onDrop={this.onDrop.bind(this)}
                    onDragEnd={this.onDragEnd.bind(this)}
                    onDragEnter={this.onDragEnter.bind(this)}
                    onDragStart={this.onDragStart.bind(this)}
                    className="dragTarget">
            {this.props.children}
        </div>
    }
}


DragTarget.propTypes = {
    currentIndex: PropTypes.number.isRequired
};