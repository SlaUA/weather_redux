import React from 'react';
import {connect} from 'react-redux';
import * as tabActions from '../actions/Tab';
import {bindActionCreators} from 'redux';
import Chart from './Chart';

require('../../styles/Tabs.styl');

class Tabs extends React.Component {
	
	render() {
		
		let tabHeaders = [],
			tabContents = [],
			index = 0,
			{tabChartsConfig, activeTab} = this.props;
		
		if (!tabChartsConfig) {
			return null;
		}
		
		for (let tab in tabChartsConfig) {
			
			if (!tabChartsConfig.hasOwnProperty(tab)) {
				continue;
			}
			tabHeaders.push(
				<span
					onClick={this.props.changeActiveTab.bind(this, index)}
					key={index}
					className={`tabHeader ${activeTab === index ? 'active' : ''}`}>
					{tabChartsConfig[tab].tabName}
					</span>
			);
			
			tabContents.push(
				<span key={index} className={`tabContent ${activeTab === index ? 'active' : ''}`}>
					
					<Chart
						tabChartsConfig={this.props.tabChartsConfig}
						tabName={tabChartsConfig[tab].tabName}
						chartConfig={tabChartsConfig[tab].chartConfig}/>
					
					</span>
			);
			index++;
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
	activeTab: state.tabsReducer.activeTab
});
const mapDispatchToProps = (dispatch) => ({
	changeActiveTab: bindActionCreators(tabActions.changeActiveTab, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);