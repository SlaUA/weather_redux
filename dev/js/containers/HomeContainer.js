import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		
		console.log(this);
	}
	
	render() {
		return (
			<div>
				hello!
			</div>
		)
	}
}

export default connect()(Home);