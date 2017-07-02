import React from 'react';
import {connect} from 'react-redux';
import Highcharts from 'highcharts';
import {bindActionCreators} from 'redux';
import * as chartActions from '../actions/Tab';
require('../../styles/Chart.styl');

class Chart extends React.Component {
	
	constructor(props) {
		
		super(props);
		
		this.uniChartConfig = {
			title: {
				text: 'Default name'
			},
			xAxis: {
				categories: []
			},
			plotOptions: {
				series: {
					pointPadding: 0.05,
					groupPadding: 0,
					borderWidth: 0.5
				}
			},
			series: [
				{
					data: []
				}
			]
		};
	}
	
	drawChart(props) {
		
		if (!props.searchResult.list) {
			return;
		}
		for (let tab in this.props.tabsConfig) {
			if (!this.props.tabsConfig.hasOwnProperty(tab)) {continue;}
			
			Highcharts.chart(
				this.refs[this.props.tabsConfig[tab].name],
				Object.assign({}, this.uniChartConfig, this.props.tabsConfig[tab].chartConfig)
			);
		}
	}
	
	componentDidUpdate() {
		
		this.drawChart(this.props);
	}
	
	render() {
		
		return (
			null
		);
	}
}

const mapStateToProps = (state) => ({
	tabsConfig: state.chartReducer.tabsConfig,
	activeTab: state.chartReducer.activeTab
});
const mapDispatchToProps = (dispatch) => ({changeActiveTab: bindActionCreators(chartActions.changeActiveTab, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);