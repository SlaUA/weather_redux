import React from 'react';
require('../../styles/CurrentCityInfo.styl');
import {days, monthNames} from '../constants/app';

export default class CurrentCityInfo extends React.Component {
	
	render() {
		
		if (!this.props.currentInfo) {
			return null;
		}
		
		let today = new Date(),
			currentDate = `${days[today.getDay()]}, ${today.getDate()} ${monthNames[today.getMonth()]}`,
			{
				currentCity,
				currentTemperature,
				currentWeather,
				currentWeatherIcon,
				currentPressure,
				currentHumidity,
				currentWindSpeed,
				currentClouds
			} = this.props.currentInfo;
		
		if (!currentCity) {
			return null;
		}
		
		return (
			<div className="currentCityInfoWrapper">
				<span className="currentDate">{currentDate}</span>
				<div className="cityInfo">
					<div className="currentCity">{currentCity}</div>
					<div>
						<span className="currentTemperature">{currentTemperature}&#176;</span>
						<span className="currentDegrees">C</span>
					</div>
					<div className="currentTotalWeather">
						<img className="currentWeatherIcon"
						     src={`http://openweathermap.org/img/w/${currentWeatherIcon}.png`}/>
						<span className="currentWeather">{currentWeather}</span>
					</div>
					<div className="currentTotalIndicators">
						<div className="indicator">
							<span className="indicatorName">Pressure:</span>
							<span className="indicatorValue currentPressure">{currentPressure} hPa</span>
						</div>
						<div className="indicator">
							<span className="indicatorName">Humidity:</span>
							<span className="indicatorValue currentHumidity">{currentHumidity}%</span>
						</div>
						<div className="indicator">
							<span className="indicatorName">Wind Speed:</span>
							<span className="indicatorValue currentWindSpeed">{currentWindSpeed}m/s</span>
						</div>
						<div className="indicator">
							<span className="indicatorName">Clouds:</span>
							<span className="indicatorValue currentClouds">{currentClouds}%</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
};