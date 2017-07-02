import React from 'react';
import Highcharts from 'highcharts';
require('../../styles/Tabs.styl');

export default class Chart extends React.Component {
	
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
			series: []
		};
	}
	
	shouldComponentUpdate(nextProps) {
		
		return this.props.tabChartsConfig !== nextProps.tabChartsConfig;
	}
	
	drawChart() {
		
		if (!this.props.chartConfig) {
			return;
		}
		
		Highcharts.chart(
			this.refs[this.props.tabName],
			{...this.uniChartConfig, ...this.props.chartConfig}
		);
	}
	
	componentDidUpdate() {
		
		this.drawChart();
	}
	
	componentDidMount() {
		
		this.drawChart();
	}
	
	render() {
		
		return this.props.chartConfig ? (
			<div ref={this.props.tabName} className="chartRoot"/>
		) : null;
	}
}