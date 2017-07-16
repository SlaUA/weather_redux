import React from 'react';
require('../../styles/DragSource.styl');

export default class DragSource extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	onDragStart(e) {
		e.dataTransfer.setData('text', this.props.id.toString());
	}
	
	render() {
		
		return (
			<div draggable="true"
			     className="dragSource"
			     onDragStart={this.onDragStart.bind(this)}>
				{this.props.text}
			</div>
		);
	}
}