import React from 'react';
import {connect} from 'react-redux';
import DragTarget from '../components/DragTarget';
import DragSource from '../components/DragSource';
require('../../styles/DragNDrop.styl');

class DragNDrop extends React.Component {

    render() {

        let {targetSources, draggables} = this.props,
            targets = new Array(targetSources).fill({}).map((targetSource, index)=> {

                let containsDraggable = draggables[index];

                return containsDraggable ?

                    <DragTarget key={index}>
                        <DragSource key={containsDraggable.key}/>
                    </DragTarget> : <DragTarget key={index}/>;
            });

        return (
            <div className="dragNDropWrapper">
                {targets}
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    targetSources: state.dragNDropReducer.targetSources,
    draggables: state.dragNDropReducer.draggables
});

export default connect(mapStateToProps, null)(DragNDrop);