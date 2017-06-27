import React from 'react';
import {connect} from 'react-redux';

class CurrentCityInfo extends React.Component {

    render() {

        return (
            <div className="currentCityInfoWrapper">
                <span className="currentDate">Monday, 6 February</span>
                <div className="cityInfo">
                    <div className="currentCity">London, UK</div>
                    <section>
                        <span className="currentTemperature">22</span>
                        <span className="currentDegrees">&#x2103;</span>
                    </section>
                    <section>
                        <span className="sunIcon"/>
                        <span className="currentWeather">Sunny</span>
                    </section>
                    <section>
                        <span className="desc">Pressure</span>
                        <span className="currentPressure">1002</span>
                        <span className="desc">Humidity</span>
                        <span className="currentHumidity">10</span>
                        <span className="desc">Wind Speed</span>
                        <span className="currentWindSpeed">6</span>
                        <span>m/s</span>
                        <span className="desc">Clouds</span>
                        <span className="currentClouds">40</span>
                        <span>%</span>
                    </section>
                </div>
            </div>
        );
    }
}

export default connect()(CurrentCityInfo)