import React from 'react';
import {connect} from 'react-redux';
require('../../styles/search.styl');


class Search extends React.Component {

    render() {

        return (
            <div className="searchWrapper">
                <div className="topDescription">
                    <span className="sunIcon"/>
                    <span>Forecast</span>
                </div>
                <input type="text" className="locationSearch" placeholder="type city here"/>
            </div>
        );
    }
}

export default connect()(Search)