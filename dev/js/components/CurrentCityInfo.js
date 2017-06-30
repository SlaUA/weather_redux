import React from 'react';
import {connect} from 'react-redux';
require('../../styles/CurrentCityInfo.styl');

class CurrentCityInfo extends React.Component {
	
	render() {
		
		return (
			<div className="currentCityInfoWrapper">
				<span className="currentDate">Monday, 6 February</span>
				<div className="cityInfo">
					<div className="currentCity">London, UK</div>
					<div>
						<span className="currentTemperature">22&#176;</span>
						<span className="currentDegrees">C</span>
					</div>
					<div className="currentTotalWeather">
						<span className="sunIcon"/>
						<span className="currentWeather">Sunny</span>
					</div>
					<div className="currentTotalIndicators">
						<div className="indicator">
							<span className="indicatorName">Pressure:</span>
							<span className="indicatorValue currentPressure">1002</span>
						</div>
						<div className="indicator">
							<span className="indicatorName">Humidity:</span>
							<span className="indicatorValue currentHumidity">10</span>
						</div>
						<div className="indicator">
							<span className="indicatorName">Wind Speed:</span>
							<span className="indicatorValue currentWindSpeed">6m/s</span>
						</div>
						<div className="indicator">
							<span className="indicatorName">Clouds:</span>
							<span className="indicatorValue currentClouds">40%</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(CurrentCityInfo)