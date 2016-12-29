var React = require('react');

var WeatherMessage = React.createClass({


	render: function(){

		return (
			<div>
				<h3 className="text-center"> Temperature in {this.props.loc} is {this.props.temp}</h3>
			</div>
			);

	}

});

module.exports = WeatherMessage;