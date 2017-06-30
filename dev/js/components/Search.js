import React from 'react';
import {connect} from 'react-redux';
import * as searchActions from '../actions/Search';
import {bindActionCreators} from 'redux';

require('../../styles/Search.styl');

class Search extends React.Component {

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (Position) => this.props.actions.search({
                lat: Position.coords.latitude,
                lon: Position.coords.longitude
            })
        )
    }

    render() {

        return (
            <div className="searchWrapper">
                <div className="topDescription">
                    <span className="sunIcon"/>
                    <span>Forecast</span>
                </div>
                <input type="text" className="locationSearch" placeholder="type city here"/>
            </div>
        );
    }
}

export default connect(null, (dispatch)=>({actions: bindActionCreators(searchActions, dispatch)}))(Search);