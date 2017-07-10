import React from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import CurrentCityInfo from '../components/CurrentCityInfo';
import Tabs from '../components/Tabs';

require('../../styles/index.styl');

class Weather extends React.Component {
	
	render() {
		
		return (
			<div className="homeWrapper">
				<Search />
				<CurrentCityInfo currentInfo={this.props.currentInfo}/>
				<Tabs tabChartsConfig={this.props.tabChartsConfig}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentInfo: state.weatherReducer.currentInfo,
	tabChartsConfig: state.weatherReducer.tabChartsConfig
});

export default connect(mapStateToProps, null)(Weather);