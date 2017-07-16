import React from 'react';
import {connect} from 'react-redux';
import DragTarget from '../components/DragTarget';
import DragSource from '../components/DragSource';
import {bindActionCreators} from 'redux';
import * as dndActions from '../actions/DragNDrop';

require('../../styles/DragNDrop.styl');

class DragNDrop extends React.Component {
	
	render() {
		
		let {targetSources} = this.props,
			targets = targetSources.map((targetSource) => {
				
				let innerDraggable = targetSource.draggable;
				
				return innerDraggable ?
					
					<DragTarget onDrop={this.props.onDrop}
					            id={targetSource.id}
					            key={targetSource.id}>
						<DragSource
							id={innerDraggable.id}
							text={innerDraggable.text}
							key={innerDraggable.id}/>
					</DragTarget> : <DragTarget onDrop={this.props.onDrop}
					                            id={targetSource.id}
					                            key={targetSource.id}/>;
			});
		
		return (
			<div className="dragNDropWrapper">
				{targets}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	targetSources: state.dragNDropReducer.targetSources
});

const mapDispatchToProps = (dispatch) => ({
	onDrop: bindActionCreators(dndActions.drop, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DragNDrop);