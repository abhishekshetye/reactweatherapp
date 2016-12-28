var React = require('react');

var WeatherMessage = React.createClass({


	render: function(){

		return (
			<div>
				<p> Temperature in {this.props.loc} is {this.props.temp}</p>
			</div>
			);

	}

});

module.exports = WeatherMessage;