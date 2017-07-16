import React from 'react';
require('../../styles/DragTarget.styl');

export default class DragTarget extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	// allow drop or not
	onDragOver(e) {
		if (this.props.children) {return;}
		e.preventDefault();
	}
	
	onDrop(e) {
		let draggableId = +e.dataTransfer.getData('text'),
			targetSourceId = this.props.id;
		
		this.props.onDrop({
			targetSourceId,
			draggableId
		});
	}
	
	render() {
		
		return <div onDrop={this.onDrop.bind(this)}
		            onDragOver={this.onDragOver.bind(this)}
		            className="dragTarget">
			{this.props.children}
		</div>
	}
}