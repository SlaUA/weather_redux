import * as searchConstants from '../constants/Search';
import {monthNames} from '../constants/app';

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
	tabChartsConfig: {
		Wind: {
			tabName: 'Wind',
			chartConfig: {
				title: {
					text: 'Wind'
				},
				yAxis: {
					title: {text: 'm/s'}
				},
				xAxis: {
					categories: []
				},
				series: [],
			}
		},
		Temperature: {
			tabName: 'Temperature',
			chartConfig: {
				title: {
					text: 'Temperature'
				},
				xAxis: {
					categories: []
				},
				yAxis: {
					title: {text: 'deg'}
				},
				series: []
			}
		},
		Pressure: {
			tabName: 'Pressure',
			chartConfig: {
				title: {
					text: 'Pressure'
				},
				xAxis: {
					categories: []
				},
				yAxis: {
					title: {text: 'hPa'}
				},
				series: []
			}
		},
		Humidity: {
			tabName: 'Humidity',
			chartConfig: {
				title: {
					text: 'Humidity'
				},
				xAxis: {
					categories: []
				},
				yAxis: {
					title: {text: '%'}
				},
				series: []
			}
		}
	}
};

export default function (state = initialState, action) {
	
	switch (action.type) {
		case searchConstants.SEARCH_DONE:
			
			let newTabChartsConfig = {...state.tabChartsConfig};
			
			for (let tab in newTabChartsConfig) {
				if (!newTabChartsConfig.hasOwnProperty(tab)) {
					continue;
				}
				newTabChartsConfig[tab].chartConfig.series = [
					{
						type: 'column',
						data: [],
						showInLegend: false
					}
				];
			}
			
			action.payload.list.forEach((dailyForecast) => {
				
				let forecastDate = new Date(dailyForecast.dt * 1000),
					forecastDay = `${forecastDate.getDate()} ${(monthNames[forecastDate.getMonth()]).substr(0, 3).toLowerCase()}`;
				
				newTabChartsConfig.Wind.chartConfig.xAxis.categories.push(forecastDay);
				newTabChartsConfig.Temperature.chartConfig.xAxis.categories.push(forecastDay);
				newTabChartsConfig.Pressure.chartConfig.xAxis.categories.push(forecastDay);
				newTabChartsConfig.Humidity.chartConfig.xAxis.categories.push(forecastDay);
				
				newTabChartsConfig.Wind.chartConfig.series[0].data.push(dailyForecast.speed);
				newTabChartsConfig.Temperature.chartConfig.series[0].data.push(parseInt(dailyForecast.temp.max));
				newTabChartsConfig.Pressure.chartConfig.series[0].data.push(parseInt(dailyForecast.pressure));
				newTabChartsConfig.Humidity.chartConfig.series[0].data.push(dailyForecast.humidity);
			});
			
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
				},
				tabChartsConfig: newTabChartsConfig
			};
	}
	return state;
}