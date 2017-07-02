import React from 'react';
import {connect} from 'react-redux';
import * as tabActions from '../actions/Tab';
import {bindActionCreators} from 'redux';

class Tabs extends React.Component {
	
	render() {
		
		let tabHeaders = [], tabContents = [], {tabChartsConfig, activeTab} = this.props;
		
		if (!tabChartsConfig) {
			return null;
		}
		
		tabChartsConfig.forEach((tab, index) => {
			
			tabHeaders.push(
				<span
					onClick={this.props.changeActiveTab.bind(this, index)}
					key={index}
					className={`tabHeader ${activeTab === index ? 'active' : ''}`}>
					{tab.tabName}
					</span>
			);
			
			tabContents.push(
				<span ref={tab.tabName} key={index}
				      className={`tabContent ${activeTab === index ? 'active' : ''}`}>
					</span>
			);
		});
		
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