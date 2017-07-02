import * as searchConstants from '../constants/Search';

let initialState = {
	currentInfo: {
		currentCity: '',
		currentTemperature: '',
		currentWeather: '',
		currentWeatherIcon: '',
		currentPressure: '',
		currentHumidity: '',
		currentWindSpeed: '',
		currentClouds: ''
	},
	tabChartsConfig: [
		{
			tabName: 'Wind',
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
		{
			tabName: 'Temperature',
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
		{
			tabName: 'Pressure',
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
		{
			tabName: 'Humidity',
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
	]
};

export default function (state = initialState, action) {
	
	switch (action.type) {
		case searchConstants.SEARCH_DONE:
			
			return {
				...state,
				currentInfo: {
					currentCity: `${action.payload.city.name}, ${action.payload.city.country}`,
					currentTemperature: parseInt(action.payload.list[0].temp.max),
					currentWeather: action.payload.list[0].weather[0].main,
					currentWeatherIcon: action.payload.list[0].weather[0].icon,
					currentPressure: parseInt(action.payload.list[0].pressure),
					currentHumidity: action.payload.list[0].humidity,
					currentWindSpeed: action.payload.list[0].speed,
					currentClouds: action.payload.list[0].clouds
				}
			};
	}
	return state;
}