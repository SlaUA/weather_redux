import * as searchConstants from '../constants/Search';
import * as chartConstants from '../constants/Chart';
import {monthNames} from '../constants/app';

let initialState = {
	activeTab: 'Wind',
	tabsConfig: {
		Wind: {
			name: 'Wind',
			isActive: true,
			chartConfig: {
				title: {
					text: 'Wind'
				},
				xAxis: {
					categories: []
				},
				series: [
					{
						type: 'column',
						data: [],
						showInLegend: false
					}
				]
			}
		},
		Temperature: {
			name: 'Temperature',
			isActive: false,
			chartConfig: {
				title: {
					text: 'Temperature'
				},
				xAxis: {
					categories: []
				},
				series: [
					{
						type: 'column',
						data: [],
						showInLegend: false
					}
				]
			}
		},
		Pressure: {
			name: 'Pressure',
			isActive: false,
			chartConfig: {
				title: {
					text: 'Pressure'
				},
				xAxis: {
					categories: []
				},
				series: [
					{
						type: 'column',
						data: [],
						showInLegend: false
					}
				]
			}
		},
		Humidity: {
			name: 'Humidity',
			isActive: false,
			chartConfig: {
				title: {
					text: 'Humidity'
				},
				xAxis: {
					categories: []
				},
				series: [
					{
						type: 'column',
						data: [],
						showInLegend: false
					}
				]
			}
		}
	}
};

export default function (state = initialState, action) {
	
	let newState = Object.assign({}, state);
	
	switch (action.type) {
		
		case searchConstants.SEARCH_DONE:
			
			for (let tab in newState.tabsConfig) {
				if (!newState.tabsConfig.hasOwnProperty(tab)) {continue;}
				newState.tabsConfig[tab].chartConfig.xAxis.categories = [];
				newState.tabsConfig[tab].chartConfig.series[0].data = [];
			}
			
			action.payload.list.forEach((dailyForecast) => {
				
				let forecastDate = new Date(dailyForecast.dt * 1000),
					forecastDay = `${forecastDate.getDate()} ${(monthNames[forecastDate.getMonth()]).substr(0, 3).toLowerCase()}`;
				
				newState.tabsConfig.Wind.chartConfig.xAxis.categories.push(forecastDay);
				newState.tabsConfig.Temperature.chartConfig.xAxis.categories.push(forecastDay);
				newState.tabsConfig.Pressure.chartConfig.xAxis.categories.push(forecastDay);
				newState.tabsConfig.Humidity.chartConfig.xAxis.categories.push(forecastDay);
				
				newState.tabsConfig.Wind.chartConfig.series[0].data.push(dailyForecast.speed);
				newState.tabsConfig.Temperature.chartConfig.series[0].data.push(parseInt(dailyForecast.temp.max));
				newState.tabsConfig.Pressure.chartConfig.series[0].data.push(parseInt(dailyForecast.pressure));
				newState.tabsConfig.Humidity.chartConfig.series[0].data.push(dailyForecast.humidity);
			});
			
			return newState;
		
		case chartConstants.TAB_CHANGE:
			
			for (let tab in newState.tabsConfig) {
				if (!newState.tabsConfig.hasOwnProperty(tab)) {continue;}
				newState.tabsConfig[tab].isActive = tab === action.payload;
			}
			newState.activeTab = action.payload;
			return newState;
		
		default:
			return state;
	}
}