import React from 'react';
import {connect} from 'react-redux';
import * as searchActions from '../actions/Search';
import {bindActionCreators} from 'redux';

require('../../styles/Search.styl');

class Search extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            inputTimeoutId: -1,
            inputDelayTimer: 250
        }
    }

    componentDidMount() {

        // navigator.geolocation.getCurrentPosition(
        //     (Position) => this.props.actors.search({
        //         lat: Position.coords.latitude,
        //         lon: Position.coords.longitude
        //     })
        // )
    }

    captureSearchInput(event) {
        console.log(event.target.value);
        console.log(this.props.actors);
    }

    render() {

        let {searchText} = this.props;

        return (
            <div className="searchWrapper">
                <div className="topDescription">
                    <span className="sunIcon"/>
                    <span>Forecast</span>
                </div>
                <input type="text"
                       className="locationSearch"
                       placeholder="type city here"
                       onInput={(e)=>this.captureSearchInput(e)}
                       value={searchText}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>({actors: bindActionCreators(searchActions, dispatch)});
const mapStateToProps = (state)=>({searchText: state.searchReducer.searchText});

export default connect(mapStateToProps, mapDispatchToProps)(Search);