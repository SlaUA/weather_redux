import React from 'react';
import {connect} from 'react-redux';
import Highcharts from 'highcharts';
import {bindActionCreators} from 'redux';
import * as chartActions from '../actions/Chart';
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
	
	drawCharts(props) {
		
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
		
		this.drawCharts(this.props);
	}
	
	render() {
		
		let {tabsConfig, searchResult, activeTab} = this.props,
			tabHeaders = [],
			tabContents = [];
		
		if (!(searchResult && searchResult.list)) {
			return null;
		}
		
		for (let tab in tabsConfig) {
			if (!tabsConfig.hasOwnProperty(tab)) {continue;}
			tabHeaders.push(
				<span
					onClick={this.props.changeActiveTab.bind(this, tabsConfig[tab].name)}
					key={tabsConfig[tab].name}
					className={`tabHeader ${tabsConfig[tab].isActive ? 'active' : ''}`}>
					{tabsConfig[tab].name}
					</span>
			);
			
			tabContents.push(
				<span ref={tabsConfig[tab].name} key={tabsConfig[tab].name}
				      className={`tabContent ${tabsConfig[tab].isActive ? 'active' : ''}`}>
					{tabsConfig[tab].name}
					</span>
			);
		}
		
		return (
			<div className="chartWrapper">
				<div className="forecastHeader">Forecast 16 days</div>
				<div className="chartTabs">
					<div className="tabHeaders">
						{tabHeaders}
					</div>
					<div className="tabsContent">
						{tabContents}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	tabsConfig: state.chartReducer.tabsConfig,
	activeTab: state.chartReducer.activeTab
});
const mapDispatchToProps = (dispatch) => ({changeActiveTab: bindActionCreators(chartActions.changeActiveTab, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);