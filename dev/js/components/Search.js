import React from 'react';
import {connect} from 'react-redux';
import * as searchActions from '../actions/Search';
import {bindActionCreators} from 'redux';

require('../../styles/Search.styl');

class Search extends React.Component {
	
	constructor(props) {
		
		super(props);
		
		this.timersConfig = {
			// timeout reference
			inputTimeoutId: -1,
			// throttle timeout
			inputDelayTimer: 500
		}
	}
	
	componentDidMount() {
		
		navigator.geolocation.getCurrentPosition(
			(Position) => this.props.search({
				lat: Position.coords.latitude,
				lon: Position.coords.longitude
			})
		)
	}
	
	captureSearchInput(event) {
		
		this.props.changeSearchInput(event.target.value);
		
		clearTimeout(this.timersConfig.inputTimeoutId);
		
		this.timersConfig.inputTimeoutId = setTimeout(
			this.props.search.bind(this, this.props.searchText),
			this.timersConfig.inputDelayTimer
		);
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
				       onInput={(e) => this.captureSearchInput(e)}
				       value={searchText}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({searchText: state.searchReducer.searchText});
const mapDispatchToProps = (dispatch) => bindActionCreators({
	search: searchActions.search,
	changeSearchInput: searchActions.changeSearchInput
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);