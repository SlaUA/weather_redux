import React from 'react';
import {connect} from 'react-redux';
require('../../styles/Chart.styl');

class Chart extends React.Component {

    render() {

        return (
            <div className="chartWrapper">
                <div className="forecastHeader">Forecast 16 days</div>
                <div className="chartTabs">
                    <div className="tabHeaders">
                        <span className="tabHeader active">Wind</span>
                        <span className="tabHeader">Temperature</span>
                        <span className="tabHeader">Pressure</span>
                        <span className="tabHeader">Humidity</span>
                    </div>
                    <div className="tabsContent">
                        <span className="tabContent active">Wind</span>
                        <span className="tabContent">Temperature</span>
                        <span className="tabContent">Pressure</span>
                        <span className="tabContent">Humidity</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Chart)